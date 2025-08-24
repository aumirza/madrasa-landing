import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from 'axios';
import {
  getToken as apiGetToken,
  refreshToken as apiRefreshToken,
} from '@/lib/authApi';
import { useAuthStore } from '@/stores/authStore';

// Lightweight axios wrapper that handles:
// - initialization (getToken) on app start
// - attaching Authorization header
// - refreshing access token using refreshToken endpoint
// Assumptions:
// - The API base url can be provided via NEXT_PUBLIC_API_BASE_URL, otherwise requests use relative paths
// - clientId / clientSecret (for initial getToken) are provided via NEXT_PUBLIC_MADRASA_CLIENT_ID and NEXT_PUBLIC_MADRASA_CLIENT_SECRET
// - getToken returns { accessToken, refreshToken } and refreshToken endpoint returns the same shape

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};

const isBrowser = typeof window !== 'undefined';

function setTokens(resp: TokenResponse) {
  // delegate to store
  useAuthStore.getState().setTokens(resp);
}

function clearTokens() {
  useAuthStore.getState().clear();
}

function getAccessToken(): string | null {
  return useAuthStore.getState().accessToken;
}

function getRefreshToken(): string | null {
  return useAuthStore.getState().refreshToken;
}

function getExpiresAt(): number | null {
  return useAuthStore.getState().expiresAt;
}

let refreshPromise: Promise<void> | null = null;

export const axiosInstance: AxiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && config && config.headers) {
    const headers = config.headers as Record<string, string>;
    headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (r) => r,
  async (err: AxiosError) => {
    const originalRequest = err.config as AxiosRequestConfig & {
      _retry?: boolean;
    };
    if (err.response?.status === 401 && !originalRequest._retry) {
      // try to refresh
      originalRequest._retry = true;
      try {
        await ensureRefreshed();
        // after refresh, retry original
        return axiosInstance(originalRequest);
      } catch (e) {
        // failed refresh -> clear tokens and propagate error
        clearTokens();
        return Promise.reject(e);
      }
    }
    return Promise.reject(err);
  }
);

/** Ensures we have a fresh access token. Uses apiRefreshToken directly. */
export async function ensureRefreshed() {
  if (!isBrowser) {
    return;
  }
  const expiresAt = getExpiresAt();
  const now = Date.now();
  if (expiresAt && expiresAt - now > 30 * 1000) {
    return;
  }

  if (!refreshPromise) {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }
    refreshPromise = (async () => {
      try {
        const data = await apiRefreshToken(refreshToken);
        setTokens(data);
      } finally {
        refreshPromise = null;
      }
    })();
  }
  await refreshPromise;
}

/** Initialize auth on client app start. Will call apiGetToken directly. */
export async function initAuth(clientId?: string, clientSecret?: string) {
  if (!isBrowser) {
    return;
  }
  if (!(clientId && clientSecret)) {
    return;
  }

  try {
    const data = await apiGetToken(clientId, clientSecret);
    setTokens(data);
    scheduleAutoRefresh();
  } catch (_) {
    // ignore
  }
}

let refreshTimer: number | null = null;

function scheduleAutoRefresh() {
  if (!isBrowser) {
    return;
  }
  const expiresAt = getExpiresAt();
  if (!expiresAt) {
    return;
  }
  const now = Date.now();
  const msUntil = expiresAt - now - 30 * 1000; // refresh 30s before expiry
  const safeMs = Math.max(msUntil, 5 * 1000);
  if (refreshTimer) {
    window.clearTimeout(refreshTimer);
  }
  refreshTimer = window.setTimeout(async () => {
    try {
      await ensureRefreshed();
    } catch (_) {
      clearTokens();
    } finally {
      scheduleAutoRefresh();
    }
  }, safeMs);
}

export function logout() {
  clearTokens();
  if (refreshTimer) {
    window.clearTimeout(refreshTimer);
    refreshTimer = null;
  }
}

export default axiosInstance;
