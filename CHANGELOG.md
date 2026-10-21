# Changelog

## Unreleased: funding dashboard adoption

- Add a font-free core stylesheet, an optional font stylesheet and CSS-only
  consumption without React peer installation. The combined stylesheet remains
  available. Add a pure, storage-safe theme initializer.
- Add eight categorical chart tokens for real multi-venue history plots and a
  configurable table minimum width. Signed values retain their own tokens.
- Fix reduced motion, responsive cascade, menu text contrast, overlay fonts,
  light dialog controls, avatar recovery and denied theme storage. Make the
  compact button size distinct. Header texture is now explicitly opt-in.
- Type compatibility: removable Chip now requires clearLabel when onClear is
  supplied. Consumers must name their remove action. This stricter accessibility
  contract needs review before choosing the next release version.
- Add packaging, contrast, style and behavior regressions. Correct overlay
  screenshot targets and review the updated visual references.
- Record the full adoption audit, remaining gaps and live-data composition
  contract in docs. No tag or release is created by this branch.

## 0.1.1 (2026-09-23)

- Fix: the font imports moved from base.css to the top of styles.css. Some
  bundlers inline the local files in place, which left the font imports after
  real rules, where CSS does not allow them, and the whole stylesheet failed to
  parse. Nothing changes on screen.

## 0.1.0 (2026-09-23)

The first release, extracted from the KOL leaderboard's Cambrian Terminal design.
It replaces the earlier HeroUI showcase that lived in this repository, which is
still in the git history.

- 39 tokens across surfaces, ink, lines, brand, data, notice, tones, faces and
  shape, with dark and light values.
- A base layer: the Tailwind v4 reset, the three brand faces, the page ground
  and a screen-reader utility. No Tailwind, HeroUI or cambrian-ds dependency.
- Components: Shell, ShellHeader, ShellMain, PageHeader, Logo, ThemeToggle,
  useTheme, Button, SegmentedControl, SearchField, Select, Checkbox, Tooltip,
  Dialog, Menu, Badge, Chip, Notice, Skeleton, TableSkeleton, EmptyState,
  Plate, Table, SortHeader, Value, Avatar and Pagination.
- A showcase page and screenshot tests for both themes.

The leaderboard renders the same before and after moving onto this system.
Every screen matched pixel for pixel, in both themes, with the dialog, menu,
hover and focus states compared too. One change was deliberate: the page ground
behind the app, which only shows when a page is scrolled past its end, now
matches the theme instead of staying cream in dark mode.
