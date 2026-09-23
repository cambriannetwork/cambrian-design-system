import { useState, type ReactNode } from 'react';
import { Columns3, Download, Info } from 'lucide-react';
import tokensCss from '../src/tokens.css?raw';
import {
  Avatar,
  Badge,
  Button,
  ButtonCount,
  Checkbox,
  Chip,
  ChipGroup,
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  EmptyState,
  Logo,
  Menu,
  MenuAction,
  MenuNote,
  Notice,
  PageHeader,
  Pagination,
  Plate,
  PlateBar,
  PlateIntro,
  SearchField,
  SegmentedControl,
  Select,
  Shell,
  ShellHeader,
  ShellMain,
  SortHeader,
  Table,
  TableScroll,
  TableSkeleton,
  ThemeToggle,
  Tooltip,
  TooltipProvider,
  Value,
  ariaSort,
  buttonClass,
  useTheme,
  type SortDirection,
} from '@cambrian/design-system';

// Every token name, read from tokens.css itself so this page cannot drift.
const TOKENS = [...new Set(tokensCss.match(/--cds-[a-z0-9-]+(?=:)/g) ?? [])];
const COLOUR_TOKENS = TOKENS.filter((t) => !/font|radius|row-height/.test(t));

function Section({ id, title, note, children }: { id: string; title: string; note: string; children: ReactNode }) {
  return (
    <section className="sc-section" id={id} data-testid={id}>
      <h2 className="cds-label">{title}</h2>
      <p className="sc-note">{note}</p>
      <div className="sc-demo">{children}</div>
    </section>
  );
}

const ROWS: { name: string; day: number | null; week: number | null; vsBtc: number | null }[] = [
  { name: 'alpha_desk', day: 0.0624, week: 0.1296, vsBtc: 0.1335 },
  { name: 'beta_notes', day: -0.0021, week: 0.0582, vsBtc: 0.0769 },
  { name: 'gamma_calls', day: 0, week: null, vsBtc: -0.0858 },
  { name: 'delta_signal', day: 0.0124, week: 0.031, vsBtc: 4208.1489 },
];
const pct = (v: number) => `${v > 0 ? '+' : ''}${(v * 100).toFixed(2)}%`;

export function Showcase() {
  const [theme, setTheme] = useTheme();
  const [view, setView] = useState('all');
  const [query, setQuery] = useState('alpha');
  const [window, setWindow] = useState('30d');
  const [checked, setChecked] = useState(true);
  const [hidden, setHidden] = useState<string[]>(['calls']);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(25);
  const [sort, setSort] = useState<{ key: string; direction: SortDirection }>({ key: 'week', direction: 'desc' });
  const flip = (key: string) =>
    setSort((s) => ({ key, direction: s.key === key && s.direction === 'desc' ? 'asc' : 'desc' }));

  return (
    <TooltipProvider>
      <Shell mainId="showcase">
        <ShellHeader product="Design system" />
        <ShellMain id="showcase">
          <PageHeader
            title="Cambrian design system"
            subtitle="Every token and component, in the theme you pick."
            actions={<ThemeToggle theme={theme} onChange={setTheme} />}
          />

          <Section id="tokens" title="Colour tokens" note="Declared once per theme in tokens.css. Components read these and nothing else.">
            <div className="sc-swatches">
              {COLOUR_TOKENS.map((token) => (
                <div key={token} className="sc-swatch">
                  <span className="sc-chip" style={{ background: `var(${token})` }} />
                  <code>{token}</code>
                </div>
              ))}
            </div>
          </Section>

          <Section id="type" title="Type" note="Crimson Text for titles, Figtree for prose, IBM Plex Mono for numbers and labels.">
            <p className="sc-serif">Crimson Text. Page and dialog titles only.</p>
            <p className="sc-sans">Figtree. Everything a person reads as prose.</p>
            <p className="sc-mono">IBM Plex Mono. 1,234.56 and every table figure.</p>
            <p className="cds-label">cds-label. Small caps labels.</p>
          </Section>

          <Section id="logo" title="Logo" note="The official mark. Its fills never change with the theme.">
            <Logo size={48} />
          </Section>

          <Section id="buttons" title="Button" note="One style, two sizes. Icons go before the label.">
            <div className="sc-row">
              <Button>How ranking works</Button>
              <Button small icon={<Download size={15} aria-hidden="true" />}>Export</Button>
              <Button small icon={<Columns3 size={15} aria-hidden="true" />}>
                Columns <ButtonCount>2 off</ButtonCount>
              </Button>
              <Button small disabled>Disabled</Button>
            </div>
          </Section>

          <Section id="segmented" title="SegmentedControl" note="Joined buttons, one pressed. For switching between views of one list.">
            <div className="sc-row">
            <SegmentedControl
              label="Choose a view"
              options={['all', 'winners', 'losers'].map((key) => ({
                key,
                label: key === 'all' ? 'Cambrian rank' : key === 'winners' ? 'Winners first' : 'Losers first',
                pressed: view === key,
                onSelect: () => setView(key),
              }))}
            />
            </div>
          </Section>

          <Section id="fields" title="SearchField, Select, Checkbox" note="Form controls. Every control has a label a screen reader can read.">
            <div className="sc-row">
              <SearchField label="Find a caller" value={query} onChange={setQuery} />
              <Select
                label="Activity window"
                value={window}
                onValueChange={setWindow}
                options={[
                  { value: '7d', label: 'Posted in last 7 days' },
                  { value: '30d', label: 'Posted in last 30 days' },
                ]}
                note="Changes who is eligible."
              />
              <Checkbox checked={checked} onCheckedChange={setChecked}>Hide impossible results</Checkbox>
              <Checkbox checked={false} onCheckedChange={() => {}} disabled>No impossible results</Checkbox>
            </div>
          </Section>

          <Section id="overlays" title="Tooltip, Dialog, Menu" note="Short notes go in a tooltip. Anything longer goes in a dialog. Settings go in a menu.">
            <div className="sc-row">
              <Tooltip label="A short note that explains one thing.">
                <Info size={15} aria-hidden="true" />
                <span className="cds-sr-only">About this</span>
              </Tooltip>
              <Dialog>
                <DialogTrigger className={buttonClass({ small: true })}>Open dialog</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>How we measure</DialogTitle>
                    <DialogDescription>What the numbers are, and where they are weakest.</DialogDescription>
                  </DialogHeader>
                  <DialogBody>
                    <section>
                      <h3>Prices are daily closes</h3>
                      <p>We use the closing price of the day the post landed, not the price at the moment of the post.</p>
                    </section>
                  </DialogBody>
                </DialogContent>
              </Dialog>
              <Menu
                title="Show columns"
                trigger={<><Columns3 size={15} aria-hidden="true" /> Columns</>}
                footer={<MenuAction onClick={() => setHidden([])}>Show all</MenuAction>}
              >
                {['rank', 'return', 'calls'].map((key) => (
                  <Checkbox
                    key={key}
                    checked={!hidden.includes(key)}
                    onCheckedChange={() => setHidden((h) => (h.includes(key) ? h.filter((k) => k !== key) : [...h, key]))}
                  >
                    {key}
                    {key === 'rank' && <MenuNote> (always on)</MenuNote>}
                  </Checkbox>
                ))}
              </Menu>
            </div>
          </Section>

          <Section id="feedback" title="Badge, Chip, Notice" note="Badges name a state by meaning. Chips show what is filtering a list. Notices sit above what they are about.">
            <div className="sc-row">
              <Badge tone="positive">Proven</Badge>
              <Badge tone="caution">Unproven</Badge>
              <Badge tone="neutral">Not enough data</Badge>
              <Badge tone="critical">Check this</Badge>
            </div>
            <ChipGroup label="Active filters">
              <Chip onClear={() => {}} clearLabel="Clear search">Search: alpha</Chip>
              <Chip>Posted in last 30 days</Chip>
            </ChipGroup>
            <Notice tone="warning" role="status">Updates are delayed. Showing the last available results.</Notice>
            <Notice tone="quiet" role="status">These are the worst results. The numbers are positions, not ranks.</Notice>
          </Section>

          <Section id="data" title="Plate, Table, Value, Avatar, Pagination" note="The result frame and everything in it. Missing values read N/A, never zero.">
            <Plate head={<><span>Cambrian · Showcase</span><span>Data as of today</span></>}>
              <PlateIntro hint="Click a column heading to sort.">A table of sample callers.</PlateIntro>
              <PlateBar label="Sorted by 7D return · highest first" note="Returns after each call" />
              <TableScroll label="Sample results">
                <Table caption="Sample results">
                  <thead>
                    <tr>
                      <th scope="col" className="sc-left">Caller</th>
                      {(['day', 'week', 'vsBtc'] as const).map((key) => {
                        const direction = sort.key === key ? sort.direction : null;
                        return (
                          <th key={key} scope="col" aria-sort={ariaSort(direction)} className={key === 'vsBtc' ? 'cds-table__highlight' : undefined}>
                            <SortHeader
                              label={key === 'day' ? '24H' : key === 'week' ? '7D' : '7D vs Bitcoin'}
                              detail="return"
                              direction={direction}
                              onSort={() => flip(key)}
                              hint={key === 'vsBtc' ? 'How far the call beat or missed Bitcoin.' : undefined}
                              hintLabel="7D vs Bitcoin"
                            />
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row) => (
                      <tr key={row.name}>
                        <th scope="row" className="sc-identity">
                          <Avatar label={row.name} />
                          <span>{row.name}</span>
                        </th>
                        <td><Value value={row.day}>{row.day !== null && pct(row.day)}</Value></td>
                        <td><Value value={row.week}>{row.week !== null && pct(row.week)}</Value></td>
                        <td className="cds-table__highlight">
                          <Value value={row.vsBtc} suspect={row.vsBtc !== null && Math.abs(row.vsBtc) > 1 && <Badge tone="critical">Check this</Badge>}>
                            {row.vsBtc !== null && pct(row.vsBtc)}
                          </Value>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableScroll>
              <Pagination page={page} pages={4} size={size} total={100} onPage={setPage} onSize={setSize} />
            </Plate>
          </Section>

          <Section id="loading" title="TableSkeleton, EmptyState" note="What a list shows while it loads, and when it has nothing.">
            <Plate busy>
              <TableSkeleton rows={3} columns={4} />
            </Plate>
            <Plate>
              <EmptyState title="No matching callers" action={<Button onClick={() => setQuery('')}>Clear search</Button>}>
                Try a different name or clear your search.
              </EmptyState>
            </Plate>
          </Section>
        </ShellMain>
      </Shell>
    </TooltipProvider>
  );
}
