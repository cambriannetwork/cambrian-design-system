export type SegmentedOption = {
  key: string;
  label: string;
  pressed: boolean;
  onSelect: () => void;
};

/** A row of joined buttons where one is pressed. Each option is a real button with aria-pressed. */
export function SegmentedControl({ options, label }: { options: SegmentedOption[]; label: string }) {
  return (
    <div className="cds-segmented" role="group" aria-label={label}>
      {options.map((option) => (
        <button key={option.key} type="button" aria-pressed={option.pressed} onClick={option.onSelect}>
          {option.label}
        </button>
      ))}
    </div>
  );
}
