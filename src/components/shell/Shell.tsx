import type { ReactNode } from 'react';
import { Logo } from '../logo/Logo';

/** The page frame: the ground colour, full height, and a skip link for keyboard users. */
export function Shell({ children, mainId = 'main' }: { children: ReactNode; mainId?: string }) {
  return (
    <div className="cds-shell">
      <a href={`#${mainId}`} className="cds-skip-link">Skip to content</a>
      {children}
    </div>
  );
}

/** The top bar: the mark, "Cambrian", and the product name. */
export function ShellHeader({ product }: { product: string }) {
  return (
    <header className="cds-header">
      <div className="cds-header__brand">
        <span className="cds-header__mark"><Logo size={26} /></span>
        <span>Cambrian <span className="cds-header__product">{product}</span></span>
      </div>
    </header>
  );
}

/** The main content area. Its id must match the Shell's mainId so the skip link lands here. */
export function ShellMain({ children, id = 'main' }: { children: ReactNode; id?: string }) {
  return (
    <main className="cds-shell__main" id={id}>
      {children}
    </main>
  );
}
