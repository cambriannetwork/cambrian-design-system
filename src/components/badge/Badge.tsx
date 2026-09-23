import type { ReactNode } from 'react';

/** Badge tones are named by meaning. Map your own states onto these. */
export type BadgeTone = 'positive' | 'caution' | 'neutral' | 'critical';

export function Badge({ tone, children, title }: { tone: BadgeTone; children: ReactNode; title?: string }) {
  return (
    <span className={`cds-badge cds-badge--${tone}`} title={title}>
      {children}
    </span>
  );
}
