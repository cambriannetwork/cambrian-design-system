# Live data screens

The funding dashboard is the second consumer of Cambrian's table and state
patterns. This recipe separates visual states from fetching and financial
validation. Use the existing Plate, Notice, Skeleton, Badge, Value and EmptyState.

## State contract

| State | What the user sees | Behavior |
|---|---|---|
| Initial loading | Stable frame and appropriately sized skeleton or status | Name the loading region; avoid presenting placeholder numbers as real data |
| Background refresh | Last valid rows and a quiet updating status | Preserve focus, scroll, sorting and row identity; no full-screen spinner |
| Partial coverage | Actual values where measured, N/A where unknown, a coverage label | Do not round incomplete coverage to complete or fill missing values with zero |
| Stale retained data | Last valid values plus their actual age and a caution badge | Application freshness rules decide eligibility; retained display is not permission to trade |
| Refresh failure with data | Last valid rows plus a notice and retry state | Do not erase usable content or silently label it current |
| Failure without data | Clear error, retry action, stable frame | Keep error separate from a genuine empty result |
| Empty result | EmptyState naming the active scope | Explain filters or next action without inventing data |

For example, a React consumer can keep its own accepted rows while a refresh
runs. The components style the result; they do not start requests:

```tsx
<Plate>
  <PlateIntro>Funding opportunities</PlateIntro>
  <div role="status" aria-live="polite">
    {refreshing ? 'Updating public rates' : 'Public rates received'}
  </div>
  {error && <Notice tone="warning" role="alert">Update unavailable. Showing the last received rates.</Notice>}
  <TableScroll label="Funding opportunities">
    <Table caption="Funding opportunities, before fees">
      {/* Keep keyed rows mounted. Show Value value={null} for missing values. */}
    </Table>
  </TableScroll>
</Plate>
```

Provide real table headers and rows, keyed by their stable native identity. CSS-only consumers can use the same cds classes with native
HTML, while providing their own interaction, accessible names and focus logic.

## Table and chart responsibilities

Use `font-variant-numeric: tabular-nums` for changing numeric columns. Reserve
column widths and chart height so a pending value does not shift the controls.
A product may override `--cds-table-min-width` when its columns genuinely need
less width. A scrollable table region must have an accessible name and be
keyboard reachable when it overflows. Sticky headers need opaque theme surfaces.

Categorical chart tokens identify sources. Keep visible legend labels and a way
to isolate a series. Use line patterns when colors repeat. Signed data uses
up/down tokens; missing observations break a line rather than projecting it
through an unobserved period. Charts need a textual explanation or data view.

Value wraps caller-formatted content and its visual state. The application validates finite
numbers and controls sorting, source identity, time windows, freshness and
confidence. Missing values sort last in the application's comparison function.
A complete historical average is evidence about that window, not a guarantee
of future returns or execution readiness.

## Responsiveness contract

- Keep the page shell, table rows and open overlays stable across quiet refreshes.
- Cancel obsolete resource requests and reject late responses by identity.
- Deduplicate repeated requests and bound caches by count and meaningful size.
- Pause unnecessary work while the page is hidden and recheck freshness on return.
- Page or window large tables; searching should still cover the full catalogue.
- Batch visual writes per frame and keep pointer handlers small.
- Respect reduced motion. Animation is optional feedback, never a data dependency.

These are application practices, not promises made by a stylesheet. Measure
network transfer, JSON parsing, derivation, DOM updates, layout and paint. Keep
local benchmarks distinct from field INP, and record device, fixture size,
background activity and warm/cold conditions when comparing results.
