// Cambrian design system. Import the styles once at the root of your app:
//   import '@cambrian/design-system/styles.css';
// then import components from here.

// Page frame
export { Shell, ShellHeader, ShellMain } from './components/shell/Shell';
export { PageHeader } from './components/page-header/PageHeader';
export { Logo } from './components/logo/Logo';
export { useTheme, type Theme } from './components/theme/theme';
export { ThemeToggle } from './components/theme/ThemeToggle';

// Controls
export { Button, ButtonCount, buttonClass } from './components/button/Button';
export { SegmentedControl, type SegmentedOption } from './components/segmented-control/SegmentedControl';
export { SearchField } from './components/search-field/SearchField';
export { Select, type SelectOption } from './components/select/Select';
export { Checkbox } from './components/checkbox/Checkbox';

// Overlays
export { Tooltip, TooltipProvider } from './components/tooltip/Tooltip';
export {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './components/dialog/Dialog';
export { Menu, MenuAction, MenuNote } from './components/menu/Menu';

// Feedback
export { Badge, type BadgeTone } from './components/badge/Badge';
export { Chip, ChipGroup } from './components/chip/Chip';
export { Notice } from './components/notice/Notice';
export { Skeleton, TableSkeleton } from './components/skeleton/Skeleton';
export { EmptyState } from './components/empty-state/EmptyState';

// Data
export { Plate, PlateBar, PlateIntro } from './components/plate/Plate';
export { Table, TableScroll, SortHeader, ariaSort, type SortDirection } from './components/table/Table';
export { Value } from './components/value/Value';
export { Avatar } from './components/avatar/Avatar';
export { Pagination } from './components/pagination/Pagination';
