import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** The compact size used in toolbars and page headers. */
  small?: boolean;
  /** An icon drawn before the label. Mark it aria-hidden. */
  icon?: ReactNode;
};

/** The class a button uses. Pass it to a trigger that renders its own button. */
export function buttonClass({ small = false }: { small?: boolean } = {}) {
  return small ? 'cds-button cds-button--small' : 'cds-button';
}

export function Button({ small = false, icon, children, type = 'button', className, ...rest }: ButtonProps) {
  const base = buttonClass({ small });
  return (
    <button type={type} className={className ? `${base} ${className}` : base} {...rest}>
      {icon}
      {children}
    </button>
  );
}

/** A quiet count inside a button, such as "2 off". */
export function ButtonCount({ children }: { children: ReactNode }) {
  return <span className="cds-button__count">{children}</span>;
}
