import type { ReactNode } from 'react';

/**
 * A signed number in a table cell. The sign picks the colour: up, down or
 * flat. null means there is no measurement and shows "N/A", never zero.
 * Pass suspect (usually a warning badge) for a number you show but do not
 * trust: it drops the colour and adds the badge after the number.
 */
export function Value({ value, children, suspect }: { value: number | null; children?: ReactNode; suspect?: ReactNode }) {
  if (value === null)
    return (
      <span className="cds-value--missing" aria-label="Not available">
        N/A
      </span>
    );
  if (suspect)
    return (
      <span className="cds-value--suspect">
        <span className="cds-value--flat">{children}</span>
        {suspect}
      </span>
    );
  return <span className={value > 0 ? 'cds-value--up' : value < 0 ? 'cds-value--down' : 'cds-value--flat'}>{children}</span>;
}
