'use client';
import type { ReactNode } from 'react';
import { ArrowDown, ArrowUp, ArrowUpDown, Info } from 'lucide-react';
import { Tooltip } from '../tooltip/Tooltip';

export type SortDirection = 'asc' | 'desc' | null;

/** A region that scrolls sideways when the table is wider than the page. Keyboard users can scroll it too. */
export function TableScroll({ label, children }: { label: string; children: ReactNode }) {
  return (
    // Focusable so keyboard users can scroll it.
    // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div className="cds-table-scroll" tabIndex={0} role="region" aria-label={label}>
      {children}
    </div>
  );
}

/** A data table. The caption is for screen readers; say what the table holds. */
export function Table({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <table className="cds-table">
      <caption className="cds-sr-only">{caption}</caption>
      {children}
    </table>
  );
}

/** The aria-sort value for a header cell. */
export function ariaSort(direction: SortDirection) {
  return direction === 'asc' ? 'ascending' : direction === 'desc' ? 'descending' : undefined;
}

/**
 * The content of a sortable header cell: a button with the label, a sort
 * icon, an optional second line, and an optional hint. Put it inside a <th>
 * that carries aria-sort={ariaSort(direction)}.
 */
export function SortHeader({
  label,
  detail,
  direction,
  onSort,
  hint,
  hintLabel,
}: {
  label: ReactNode;
  detail?: string;
  direction: SortDirection;
  onSort: () => void;
  hint?: ReactNode;
  /** Screen-reader name for the hint, read as "About <hintLabel>". */
  hintLabel?: string;
}) {
  const Icon = direction === 'asc' ? ArrowUp : direction === 'desc' ? ArrowDown : ArrowUpDown;
  return (
    <span className="cds-table__head">
      <button className="cds-table__sort" type="button" onClick={onSort}>
        {label}{' '}
        <Icon size={14} aria-hidden="true" />
        {detail && <span>{detail}</span>}
      </button>
      {hint && (
        <Tooltip label={hint}>
          <Info size={13} aria-hidden="true" />
          <span className="cds-sr-only">About {hintLabel}</span>
        </Tooltip>
      )}
    </span>
  );
}
