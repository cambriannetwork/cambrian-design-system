/** Browser theme setup without React. Call before paint when the app can do so. */
export type Theme = 'dark' | 'light';
type ThemeOptions = { storageKey?: string };

/** Read a saved choice, then an existing root choice, with dark as the default. */
export function readTheme({ storageKey = 'cds-theme' }: ThemeOptions = {}): Theme {
  if (typeof window !== 'undefined') {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // Browser privacy/storage restrictions must not prevent rendering.
    }
  }
  return typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'light'
    ? 'light' : 'dark';
}

/** Apply the choice without writing storage; also safe during server rendering. */
export function initializeTheme(options: ThemeOptions = {}): Theme {
  const theme = readTheme(options);
  if (typeof document !== 'undefined') document.documentElement.setAttribute('data-theme', theme);
  return theme;
}
