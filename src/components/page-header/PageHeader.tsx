import type { ReactNode } from 'react';

/** The top of a page: the title on the brand block, one line under it, and page-level actions on the right. */
export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="cds-page-header">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {actions && <div className="cds-page-header__actions">{actions}</div>}
    </div>
  );
}
