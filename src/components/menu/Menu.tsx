'use client';
import type { ReactNode } from 'react';
import { Popover as Primitive } from '@base-ui/react/popover';
import { buttonClass } from '../button/Button';

/**
 * A small panel that opens from a button: a title, a list of controls and an
 * optional action at the end. Use it for settings such as which columns show.
 */
export function Menu({
  trigger,
  title,
  children,
  footer,
  align = 'end',
}: {
  /** The button's content. The menu draws the button itself. */
  trigger: ReactNode;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  align?: 'start' | 'center' | 'end';
}) {
  return (
    <Primitive.Root>
      <Primitive.Trigger className={buttonClass({ small: true })}>{trigger}</Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Positioner sideOffset={6} align={align}>
          <Primitive.Popup className="cds-menu">
            <p className="cds-menu__title">{title}</p>
            {children}
            {footer}
          </Primitive.Popup>
        </Primitive.Positioner>
      </Primitive.Portal>
    </Primitive.Root>
  );
}

/** A quiet aside inside a menu item, such as "(always on)". */
export function MenuNote({ children }: { children: ReactNode }) {
  return <span className="cds-menu__note">{children}</span>;
}

/** The text button at the end of a menu, such as "Show all". */
export function MenuAction({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button type="button" className="cds-menu__action" onClick={onClick}>
      {children}
    </button>
  );
}
