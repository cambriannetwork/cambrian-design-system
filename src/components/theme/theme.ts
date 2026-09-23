'use client';
import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

/**
 * The page theme, saved in the browser. It sets data-theme on <html>, which
 * is where the tokens switch, so portalled popups follow the page.
 * Dark is the default. Keep storageKey stable, or visitors lose their choice.
 */
export function useTheme({ storageKey = 'cds-theme' }: { storageKey?: string } = {}) {
  // Read the saved choice during the first client render rather than in an
  // effect, so the toggle never flips after paint.
  const [theme, setTheme] = useState<Theme>(() =>
    typeof window !== 'undefined' && localStorage.getItem(storageKey) === 'light' ? 'light' : 'dark',
  );
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);
  return [theme, setTheme] as const;
}
