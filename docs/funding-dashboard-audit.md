# Funding dashboard adoption and design-system audit

Date: 2026-10-21. Audited baseline: v0.1.1, default branch at adoption.
Consumer: the local funding opportunity dashboard in `pacifica-trading-bot`.

## Assessment

Cambrian is a good fit for dense financial screens. The system has a clear
visual identity, useful semantic tokens, signed values, table captions, actual
sort buttons, a skip link and Base UI overlay primitives. Its missing-versus-zero
rule and separate action/data colors are particularly useful for funding rates.
The audit inspected every exported component, stylesheet, token, showcase
example, test and contributor document. The baseline contains 39 tokens,
22 component source files and about 32 KB of CSS source.

Adoption should share the actual package and preserve its visual language.
A React migration would not itself fix this consumer's loading issues. The
funding screen already has a small TypeScript runtime. Its bottlenecks were
large repeated payloads, repeated parsing, full-table replacement and obsolete
requests blocking new filters. These remain application responsibilities.

## Confirmed issues in the baseline

P2 means a material usability or accessibility defect. P3 means a smaller
behavior or consistency defect. All findings below came from source inspection;
new regression checks should cover behavior or computed style, in addition to
reviewing screenshots. Corrections are proposed on the adoption branch.

| Priority | Finding | Evidence | Correction |
|---|---|---|---|
| P2 | Skeletons animate with reduced motion enabled | `skeleton.css`: an unconditional animation declaration follows the reduced-motion override | Put the preference override last and check computed animation |
| P2 | Theme storage errors can crash rendering | `theme.ts`: unguarded localStorage reads and writes | Catch denied storage and retain an in-memory theme |
| P2 | Saved light theme changes only after paint | `theme.ts`: document theme is set in an effect | Provide an optional pre-paint initializer and explain server defaults |
| P2 | Menu action text has insufficient contrast | `menu.css`: brand token at 13px against raised surface | Use action token; see measured ratios below |
| P2 | Removable chips can have an unnamed button | `Chip.tsx`: onClear and clearLabel independently optional | Require an accessible label when removal is enabled |
| P2 | Light dialogs force dark native controls | `dialog.css`: fixed dark color-scheme | Inherit the document scheme |
| P2 | Several mobile rules are overridden | Avatar, shell, page header, dialog and pagination media rules precede equal-specificity defaults | Move responsive overrides after defaults; check narrow computed styles |
| P2 | Portalled overlay typography differs | Menu, Select popup and Tooltip omit their own font; shell-only typography does not reach body portals | Establish the overlay font explicitly |
| P3 | Failed avatar does not recover with a new source | Avatar failure state remains true after src changes | Track failed source or reset on source changes |
| P3 | Wide-table font rule has no effect | Later table cell defaults override the wide media query | Put wide rule after base cells and test it |
| P3 | Two advertised button sizes are identical | Both size selectors declare the same height, type and padding | Implement a compact variant and preserve default size |
| P3 | Header requests an absent asset | Shell assumes `/texture.png`, which the package does not ship | Default optional background-image variable to none |

### Contrast evidence

Ratios use the WCAG relative-luminance calculation on the token values, with
opaque foreground and background. Normal text needs 4.5:1. This does not assess
all possible custom backgrounds, opacity, antialiasing or color vision.

| Foreground / background | Dark | Light |
|---|---:|---:|
| brand / raised surface, old menu action | 4.19:1 | 2.96:1 |
| action / raised surface, corrected menu action | 6.02:1 | 4.56:1 |
| up / surface | 8.99:1 | 5.29:1 |
| down / surface | 5.93:1 | 4.69:1 |

The funding Spread APR uses the up token when positive. Brand green continues
to identify actions. A chart series color identifies a venue, never a gain or
loss. The official logo contains fixed artwork fills in the baseline, despite the
README's former blanket token-only wording. The rule now explicitly distinguishes
unmodified brand artwork from UI color choices. Consumers reuse the supplied
mark rather than recreating it.

A legend, direct text and selectable series remain necessary; color alone
cannot identify a financial source reliably.

## Gaps exposed by this product

| Need | Decision for this adoption | Remaining work |
|---|---|---|
| CSS without a framework | Add font-free `core.css`, preserve `styles.css`, make component peers optional for CSS-only consumers | Verify consumers choose and install their interactive React peers explicitly |
| Predictable font delivery | Separate optional remote `fonts.css`; consumer self-hosts selected Latin WOFF2 faces with swap | Document language/subset coverage and local fallbacks; do not mandate one CDN |
| Multiple historical venue series | Add eight categorical chart tokens for both themes | Labels, line patterns and toggles stay mandatory; eight colors do not promise unlimited unique or color-vision-safe series |
| Smaller tables | Expose a table minimum-width variable with existing 1110px default | Product chooses minimum based on columns, retaining keyboard horizontal scroll |
| Refreshing live data | Compose current components, retain previous rows, distinguish loading/refresh/stale/error/empty | Keep fetching and evidence validation out of the component library |
| Missing financial values | Render N/A and preserve actual zero | Sorting, finite-number validation, coverage and source confidence belong to the app |
| Smooth updates | Preserve focus/scroll, stable geometry, tabular figures and bounded visible rows | Measure request, parse, derive, render and paint separately; no framework or animation can guarantee responsiveness |
| Theme startup | Optional safe pre-paint initializer | Server-rendered products should match initial server/client theme to avoid hydration mismatches |

The new chart tokens and CSS entry point are justified by this real consumer.
No new fetching library, trading logic or speculative component family is added.

## Validation gaps and follow-up

The baseline has ten desktop screenshot checks, all at 1440 by 1000. The
showcase table has four rows. These checks are useful for theme and overlay
appearance, but cannot establish keyboard behavior, storage safety, mobile
cascade, reduced motion or large-table performance. No CI workflow exists in
the baseline checkout.

The adoption branch adds targeted style, behavior and packaging regressions.
Future products should also verify keyboard traversal, Escape, focus return,
accessible names, sticky table backgrounds, zoom, long translations and real
large-table updates. Establish CI once the owner chooses the supported browser
and OS snapshot matrix. Screenshots differ by platform and require human review
when intentionally regenerated.

For this consumer, a first load, a retained-data refresh, a failed refresh,
a genuine empty result and incomplete historical coverage are separate states.
A 24-hour average is not manufactured to fill a cell. An unusually large APR
stays visible with its doubt flag. UI polish must not imply trade execution
readiness.

## How to keep improving it

1. Record each real consumer's need and distinguish a defect from a missing
   primitive or an application responsibility.
2. Reproduce behavior and cascade defects with a targeted regression before
   changing source. Keep visual checks for appearance.
3. Prefer a semantic token or a documented composition over a one-off copy.
4. Check both themes, a narrow viewport, keyboard use and reduced motion.
5. Preserve compatibility, pin reviewed versions in consumers, and release only
   after the branch is reviewed.

See [live-data composition and performance contract](live-data.md) for a
concrete product recipe. This is a scoped audit, not a claim that every possible
component combination has been certified accessible or performant.

## Adoption branch validation

The complete `npm run check` exits zero: four unit contracts, TypeScript, lint,
the showcase production build and 18 browser checks. The latter include eight
new style/behavior checks and ten reviewed dark/light screenshot references.
Menu, select and tooltip snapshots now capture their actual portalled surface;
the former targets cropped the trigger section instead. All ten intentional
reference updates were opened and visually inspected.

A packed offline CSS-only installation contains one package and no automatically
installed React, Base UI or icon peers. The packed files include core CSS,
optional font CSS and the pure theme entry. Independent review found no blocking
source or packaging regression after the fixes. This is a reviewed branch
candidate, with no release or merge implied.
