'use client';
import { useEffect, useState } from 'react';
import { readTheme, type Theme } from '../../theme';
export type { Theme } from '../../theme';

/**
 * The page theme, saved in the browser. It sets data-theme on <html>, which
 * is where the tokens switch, so portalled popups follow the page.
 * Dark is the default. Keep storageKey stable, or visitors lose their choice.
 */
export function useTheme({ storageKey = 'cds-theme' }: { storageKey?: string } = {}) {
  // Read the saved choice during the first client render rather than in an
  // effect, so the toggle never flips after paint.
  const [theme, setTheme] = useState<Theme>(() => readTheme({ storageKey }));
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // Theme changes still work when the browser denies persistence.
    }
  }, [theme, storageKey]);
  return [theme, setTheme] as const;
}
