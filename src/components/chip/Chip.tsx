import type { ReactNode } from 'react';
import { X } from 'lucide-react';

/** A row of chips. Label it for screen readers, for example "Active filters". */
export function ChipGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="cds-chip-group" aria-label={label}>
      {children}
    </div>
  );
}

/** A small pill. Give it onClear to show a remove button. */
export function Chip({ children, onClear, clearLabel }: { children: ReactNode; onClear?: () => void; clearLabel?: string }) {
  return (
    <span className="cds-chip">
      {children}
      {onClear && (
        <button type="button" onClick={onClear} aria-label={clearLabel}>
          <X size={12} aria-hidden="true" />
        </button>
      )}
    </span>
  );
}
