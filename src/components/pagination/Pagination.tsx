import { ChevronLeft, ChevronRight } from 'lucide-react';

/** Page controls for a long list: the range shown, rows per page, previous and next. */
export function Pagination({
  page,
  pages,
  size,
  total,
  onPage,
  onSize,
  sizes = [25, 50, 100, 250],
  emptyLabel = 'Nothing to show',
}: {
  page: number;
  pages: number;
  size: number;
  total: number;
  onPage: (next: number) => void;
  onSize: (next: number) => void;
  sizes?: number[];
  /** Shown instead of the range when total is 0. */
  emptyLabel?: string;
}) {
  const first = total === 0 ? 0 : (page - 1) * size + 1;
  const last = Math.min(page * size, total);
  return (
    <div className="cds-pagination">
      <p aria-live="polite">
        {total === 0 ? emptyLabel : `${first.toLocaleString()} to ${last.toLocaleString()} of ${total.toLocaleString()}`}
      </p>
      <div className="cds-pagination__controls">
        <label className="cds-pagination__size">
          <span>Rows</span>
          <select value={size} onChange={(event) => onSize(Number(event.target.value))} aria-label="Rows per page">
            {sizes.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={() => onPage(page - 1)} disabled={page <= 1}>
          <ChevronLeft size={15} aria-hidden="true" /> Previous
        </button>
        <span className="cds-pagination__page">Page {page} of {pages}</span>
        <button type="button" onClick={() => onPage(page + 1)} disabled={page >= pages}>
          Next <ChevronRight size={15} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
