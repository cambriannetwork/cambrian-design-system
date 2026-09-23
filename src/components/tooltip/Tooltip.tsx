'use client';
import type { ReactNode } from 'react';
import { Tooltip as Primitive } from '@base-ui/react/tooltip';

/** Wrap the page in this once. It lets neighbouring tooltips open without a second delay. */
export const TooltipProvider = Primitive.Provider;

/**
 * A short note on hover or keyboard focus. For anything longer than two
 * sentences, use a Dialog. The trigger is focusable, so give an icon trigger
 * some screen-reader text.
 */
export function Tooltip({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <Primitive.Root>
      <Primitive.Trigger render={<span className="cds-tooltip__trigger" tabIndex={0} role="button" />}>
        {children}
      </Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Positioner sideOffset={8} side="top">
          <Primitive.Popup className="cds-tooltip">
            <Primitive.Arrow className="cds-tooltip__arrow" />
            {label}
          </Primitive.Popup>
        </Primitive.Positioner>
      </Primitive.Portal>
    </Primitive.Root>
  );
}
