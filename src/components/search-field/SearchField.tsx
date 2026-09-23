import { Search, X } from 'lucide-react';

/** A search input with a leading icon and a clear button that appears once there is text. */
export function SearchField({
  value,
  onChange,
  label,
  placeholder = label,
}: {
  value: string;
  onChange: (next: string) => void;
  /** Read by screen readers. Also the placeholder unless you set one. */
  label: string;
  placeholder?: string;
}) {
  return (
    <div className="cds-search">
      <Search size={18} aria-hidden="true" />
      <input
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="search"
      />
      {value && (
        <button type="button" onClick={() => onChange('')} aria-label="Clear search">
          <X size={16} />
        </button>
      )}
    </div>
  );
}
