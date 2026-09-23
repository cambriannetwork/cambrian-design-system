'use client';
import { Check, ChevronDown } from 'lucide-react';
import { Select as Primitive } from '@base-ui/react/select';

export type SelectOption = { value: string; label: string };

/** A single-choice dropdown that always has a value. Built on the Base UI Select. */
export function Select({
  value,
  onValueChange,
  options,
  label,
  disabled = false,
  note,
}: {
  value: string;
  onValueChange: (next: string) => void;
  options: SelectOption[];
  /** Read by screen readers. The visible text is the chosen option. */
  label: string;
  disabled?: boolean;
  /** One short line under the control. */
  note?: string;
}) {
  return (
    <div className="cds-select">
      <Primitive.Root
        value={value}
        // items lets the trigger show the option's label rather than its value.
        items={options}
        // The primitive allows clearing to null. This control always has a value.
        onValueChange={(next) => { if (next !== null) onValueChange(next); }}
        disabled={disabled}
      >
        <Primitive.Trigger className="cds-select__trigger" aria-label={label}>
          <Primitive.Value />
          <Primitive.Icon>
            <ChevronDown size={14} aria-hidden="true" />
          </Primitive.Icon>
        </Primitive.Trigger>
        <Primitive.Portal>
          <Primitive.Positioner sideOffset={6}>
            <Primitive.Popup className="cds-select__popup">
              <Primitive.List>
                {options.map((option) => (
                  <Primitive.Item key={option.value} value={option.value} className="cds-select__item">
                    <Primitive.ItemText>{option.label}</Primitive.ItemText>
                    <Primitive.ItemIndicator className="cds-select__check">
                      <Check size={13} aria-hidden="true" />
                    </Primitive.ItemIndicator>
                  </Primitive.Item>
                ))}
              </Primitive.List>
            </Primitive.Popup>
          </Primitive.Positioner>
        </Primitive.Portal>
      </Primitive.Root>
      {note && <small className="cds-select__note">{note}</small>}
    </div>
  );
}
