import type { ReactNode } from 'react';

/**
 * An inline message above the content it is about. "warning" for something the
 * reader should act on or know before trusting the page; "quiet" for context.
 * Use role "alert" only for failures, since screen readers interrupt for it.
 */
export function Notice({ tone, role, children }: { tone: 'quiet' | 'warning'; role: 'status' | 'alert'; children: ReactNode }) {
  const className = tone === 'quiet' ? 'cds-notice cds-notice--quiet' : 'cds-notice';
  if (role === 'alert')
    return (
      <div role="alert" className={className}>
        {children}
      </div>
    );
  return (
    <p role="status" className={className}>
      {children}
    </p>
  );
}
