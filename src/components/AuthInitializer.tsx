'use client';
import { useEffect } from 'react';
import { initAuth } from '@/lib/axios';

export function AuthInitializer() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_MADRASA_CLIENT_ID as
      | string
      | undefined;
    const clientSecret = process.env.NEXT_PUBLIC_MADRASA_CLIENT_SECRET as
      | string
      | undefined;
    // call initAuth but don't await in effect
    initAuth(clientId, clientSecret);
  }, []);

  return null;
}
