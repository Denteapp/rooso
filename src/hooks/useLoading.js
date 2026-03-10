'use client';

import { useState, useEffect } from 'react';

/**
 * Hook para controlar el estado de loading inicial de la página
 * @param {number} minLoadingTime - Tiempo mínimo de loading en ms (default: 2000)
 * @returns {boolean} isLoading - Estado de loading
 */
export function useLoading(minLoadingTime = 2000) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Timer para tiempo mínimo de loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadingTime);

    // Cleanup
    return () => clearTimeout(timer);
  }, [minLoadingTime]);

  return isLoading;
}
