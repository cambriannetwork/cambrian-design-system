import type { ReactNode } from 'react';

/** What a list shows when it has nothing to show: say why, then offer the way out. */
export function EmptyState({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="cds-empty" role="status">
      <h2>{title}</h2>
      <p>{children}</p>
      {action && <div>{action}</div>}
    </div>
  );
}
