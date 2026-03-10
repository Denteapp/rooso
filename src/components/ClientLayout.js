'use client';

import { useLoading } from '@/hooks/useLoading';
import LoadingScreen from '@/components/LoadingScreen';

export default function ClientLayout({ children }) {
  const isLoading = useLoading(2000); // 2 segundos de loading mínimo

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {children}
    </>
  );
}
