'use client';
import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { Checkbox as Primitive } from '@base-ui/react/checkbox';

/** A checkbox with its label. The whole label is clickable. */
export function Checkbox({
  checked,
  onCheckedChange,
  children,
  disabled = false,
}: {
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <label className={disabled ? 'cds-checkbox cds-checkbox--disabled' : 'cds-checkbox'}>
      <Primitive.Root checked={checked} onCheckedChange={onCheckedChange} disabled={disabled} className="cds-checkbox__box">
        <Primitive.Indicator className="cds-checkbox__mark">
          <Check size={13} strokeWidth={3} aria-hidden="true" />
        </Primitive.Indicator>
      </Primitive.Root>
      <span>{children}</span>
    </label>
  );
}
