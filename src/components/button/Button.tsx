import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** The compact size for tables, filters and inline actions. */
  small?: boolean;
  /** The large size for the header, a hero or a section's main action. */
  large?: boolean;
  /** An icon drawn before the label. Mark it aria-hidden. */
  icon?: ReactNode;
};

/** The class a button uses. Pass it to a trigger that renders its own button. */
export function buttonClass({ small = false, large = false }: { small?: boolean; large?: boolean } = {}) {
  if (small) return 'cds-button cds-button--small';
  if (large) return 'cds-button cds-button--large';
  return 'cds-button';
}

export function Button({ small = false, large = false, icon, children, type = 'button', className, ...rest }: ButtonProps) {
  const base = buttonClass({ small, large });
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
