'use client';
import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../button/Button';
import type { Theme } from './theme';

// The saved theme only exists in the browser, so the server cannot know which
// icon to draw. Render nothing until mounted, or hydration fails whenever a
// light theme is saved.
const noop = () => () => {};

/** A small icon button that flips between dark and light. Pair it with useTheme. */
export function ThemeToggle({ theme, onChange }: { theme: Theme; onChange: (next: Theme) => void }) {
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const next = theme === 'dark' ? 'light' : 'dark';
  if (!mounted) return <span aria-hidden="true" />;
  return (
    <Button
      small
      onClick={() => onChange(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      icon={theme === 'dark' ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
    >
      <span className="cds-sr-only">Switch to {next} theme</span>
    </Button>
  );
}
