import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export async function getToken(clientId: string, clientSecret: string) {
  const res = await axios.post<TokenResponse>(
    `${BASE_URL}/madrasaapp/api/v1/auth/getToken`,
    { clientId, clientSecret },
    { headers: { 'Content-Type': 'application/json' } }
  );
  return res.data;
}

export async function refreshToken(token: string) {
  const res = await axios.post<TokenResponse>(
    `${BASE_URL}/madrasaapp/api/v1/refreshToken`,
    null,
    { params: { token } }
  );
  return res.data;
}
