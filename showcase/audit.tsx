import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Avatar } from '../src/components/avatar/Avatar';
import { useTheme } from '../src/components/theme/theme';

function Audit() {
  const [src, setSrc] = useState('/image-missing.svg');
  const [theme, setTheme] = useTheme();
  return <>
    <Avatar label="Sample" src={src} />
    <button onClick={() => setSrc('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="2" height="2"/%3E')}>Change avatar</button>
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Theme: {theme}</button>
  </>;
}
createRoot(document.getElementById('root')!).render(<Audit />);
