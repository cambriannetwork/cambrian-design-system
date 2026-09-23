import type { ReactNode } from 'react';

/**
 * The framed panel that holds a result, with the brand's asymmetric corner.
 * head is the running head across the top: source on the left, a capture
 * stamp on the right. Set busy while its content loads.
 */
export function Plate({ busy = false, head, children }: { busy?: boolean; head?: ReactNode; children: ReactNode }) {
  return (
    <div className="cds-plate" aria-busy={busy}>
      {head && <div className="cds-plate__head">{head}</div>}
      {children}
    </div>
  );
}

/** One or two lines that explain what the plate shows, with an optional hint under them. */
export function PlateIntro({ children, hint }: { children: ReactNode; hint?: ReactNode }) {
  return (
    <div className="cds-plate__intro">
      <p>{children}</p>
      {hint && <span>{hint}</span>}
    </div>
  );
}

/** The bar above a table: what it is sorted by on the left, a note on the right. The label is announced when it changes. */
export function PlateBar({ label, note }: { label: ReactNode; note?: ReactNode }) {
  return (
    <div className="cds-plate__bar">
      <span aria-live="polite">{label}</span>
      {note && <span>{note}</span>}
    </div>
  );
}
