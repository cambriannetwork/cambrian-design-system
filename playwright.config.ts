import { defineConfig } from '@playwright/test';

// Visual tests render the showcase and compare it with the committed
// screenshots in tests/visual.spec.ts-snapshots. Fonts render slightly
// differently on each operating system, so references are stored per platform.
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  reporter: [['list']],
  use: { baseURL: 'http://localhost:5174', viewport: { width: 1440, height: 1000 } },
  expect: { toHaveScreenshot: { animations: 'disabled', caret: 'hide' } },
  webServer: { command: 'npx vite showcase', url: 'http://localhost:5174', reuseExistingServer: true },
});
