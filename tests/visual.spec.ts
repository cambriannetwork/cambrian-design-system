import { test, expect, type Page } from '@playwright/test';

// Every component in both themes, plus each overlay open. If a change moves
// a pixel you did not mean to move, one of these fails. If you did mean to,
// run `npm run test:visual:update`, look at the new images, and commit them.

async function open(page: Page, theme: 'dark' | 'light') {
  await page.addInitScript((t) => localStorage.setItem('cds-theme', t), theme);
  await page.goto('/');
  await page.waitForFunction(() => document.fonts.status === 'loaded');
  await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
}

for (const theme of ['dark', 'light'] as const) {
  test.describe(theme, () => {
    test('every component', async ({ page }) => {
      await open(page, theme);
      await expect(page).toHaveScreenshot(`${theme}-page.png`, { fullPage: true });
    });

    test('dialog', async ({ page }) => {
      await open(page, theme);
      await page.getByRole('button', { name: 'Open dialog' }).click();
      await expect(page.getByRole('dialog')).toBeVisible();
      await expect(page).toHaveScreenshot(`${theme}-dialog.png`);
    });

    test('menu', async ({ page }) => {
      await open(page, theme);
      await page.getByTestId('overlays').getByRole('button', { name: 'Columns' }).click();
      await expect(page.locator('.cds-menu')).toBeVisible();
      await expect(page.getByTestId('overlays')).toHaveScreenshot(`${theme}-menu.png`);
    });

    test('select', async ({ page }) => {
      await open(page, theme);
      await page.getByRole('combobox', { name: 'Activity window' }).click();
      await expect(page.locator('.cds-select__popup')).toBeVisible();
      await expect(page.getByTestId('fields')).toHaveScreenshot(`${theme}-select.png`);
    });

    test('tooltip', async ({ page }) => {
      await open(page, theme);
      await page.getByTestId('overlays').getByRole('button', { name: 'About this' }).hover();
      await expect(page.locator('.cds-tooltip')).toBeVisible();
      await expect(page.getByTestId('overlays')).toHaveScreenshot(`${theme}-tooltip.png`);
    });
  });
}
