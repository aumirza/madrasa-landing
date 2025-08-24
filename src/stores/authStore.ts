import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};

const ACCESS_EXPIRES_MS = 15 * 60 * 1000;

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
  setTokens: (t: TokenResponse) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      expiresAt: null,
      setTokens: (t: TokenResponse) => {
        const expiresAt = Date.now() + ACCESS_EXPIRES_MS;
        set({
          accessToken: t.accessToken,
          refreshToken: t.refreshToken,
          expiresAt,
        });
      },
      clear: () =>
        set({ accessToken: null, refreshToken: null, expiresAt: null }),
    }),
    {
      name: 'madrasa-auth',
      partialize: (s) => ({
        accessToken: s.accessToken,
        refreshToken: s.refreshToken,
        expiresAt: s.expiresAt,
      }),
    }
  )
);
