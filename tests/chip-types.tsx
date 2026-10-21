import { Chip } from '../src/components/chip/Chip';

export const validChips = [<Chip key="plain">Plain</Chip>, <Chip key="clear" onClear={() => {}} clearLabel="Remove Bitcoin">Bitcoin</Chip>];
// @ts-expect-error Removable chips require a meaningful accessible label.
export const invalidChip = <Chip onClear={() => {}}>Bitcoin</Chip>;
