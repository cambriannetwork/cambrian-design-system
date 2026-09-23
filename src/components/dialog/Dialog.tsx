'use client';
import type { ComponentProps } from 'react';
import { Dialog as Primitive } from '@base-ui/react/dialog';
import { X } from 'lucide-react';

const cx = (base: string, extra?: string) => (extra ? `${base} ${extra}` : base);

/** A modal window. Compose it from the parts below; the trigger can be any button. */
export function Dialog(props: Primitive.Root.Props) {
  return <Primitive.Root {...props} />;
}

export function DialogTrigger(props: Primitive.Trigger.Props) {
  return <Primitive.Trigger {...props} />;
}

export function DialogTitle(props: Primitive.Title.Props) {
  return <Primitive.Title {...props} />;
}

export function DialogDescription(props: Primitive.Description.Props) {
  return <Primitive.Description {...props} />;
}

export function DialogHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div {...props} className={cx('cds-dialog__header', className)} />;
}

/** The window itself, with a backdrop and a close button. Renders in a portal on <body>. */
export function DialogContent({ children, className, ...props }: Primitive.Popup.Props) {
  return (
    <Primitive.Portal>
      <Primitive.Backdrop className="cds-dialog-backdrop" />
      <Primitive.Popup {...props} className={cx('cds-dialog', typeof className === 'string' ? className : undefined)}>
        {children}
        <Primitive.Close className="cds-dialog__close" aria-label="Close"><X size={18} /></Primitive.Close>
      </Primitive.Popup>
    </Primitive.Portal>
  );
}

/** The scrolling text of a dialog. Headings and paragraphs inside it are styled. */
export function DialogBody({ className, ...props }: ComponentProps<'div'>) {
  return <div {...props} className={cx('cds-dialog__body', className)} />;
}
