import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';

async function stylesheet(url: URL): Promise<string> {
  const source = await readFile(url, 'utf8');
  let css = '';
  for (const line of source.split('\n')) {
    const match = line.match(/^@import "([^"]+)";/);
    css += match ? await stylesheet(new URL(match[1], url)) : line + '\n';
  }
  return css;
}
const core = new URL('../src/core.css', import.meta.url);
const harness = '/audit.html';

test('reduced motion stops skeleton animation in the actual cascade', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setContent('<span class="cds-skeleton"></span>');
  await page.addStyleTag({ content: await stylesheet(core) });
  await expect(page.locator('.cds-skeleton')).toHaveCSS('animation-name', 'none');
});

test('responsive component overrides follow their base rules', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.setContent('<main class="cds-shell__main"></main><span class="cds-avatar">AB</span><header class="cds-page-header"></header><div class="cds-dialog"></div><nav class="cds-pagination"></nav><table class="cds-table"><tbody><tr><td>Value</td></tr></tbody></table>');
  await page.addStyleTag({ content: await stylesheet(core) });
  await expect(page.locator('.cds-avatar')).toHaveCSS('display', 'none');
  await expect(page.locator('.cds-page-header')).toHaveCSS('flex-direction', 'column');
  await expect(page.locator('.cds-page-header')).toHaveCSS('gap', '20px');
  await expect(page.locator('.cds-dialog')).toHaveCSS('padding', '24px 20px');
  await expect(page.locator('.cds-pagination')).toHaveCSS('align-items', 'stretch');
  await page.setViewportSize({ width: 768, height: 900 });
  await expect(page.locator('.cds-shell__main')).toHaveCSS('padding', '36px 24px');
  await page.setViewportSize({ width: 1600, height: 900 });
  await expect(page.locator('.cds-table td')).toHaveCSS('font-size', '18px');
});

test('table minimum is configurable and compact buttons are visibly smaller', async ({ page }) => {
  await page.setContent('<table class="cds-table" style="--cds-table-min-width:480px"></table><button class="cds-button">Default</button><button class="cds-button cds-button--small">Small</button>');
  await page.addStyleTag({ content: await stylesheet(core) });
  await expect(page.locator('.cds-table')).toHaveCSS('min-width', '480px');
  const normal = await page.locator('.cds-button').first().boundingBox();
  const small = await page.locator('.cds-button--small').boundingBox();
  expect(small!.height).toBeLessThan(normal!.height);
});

for (const theme of ['dark', 'light']) {
  test(`${theme} portalled surfaces own typography, action contrast and color scheme`, async ({ page }) => {
    await page.setContent(`<html data-theme="${theme}"><body style="font-family:serif"><div class="cds-menu"><button class="cds-menu__action">Action</button></div><div class="cds-select__popup"></div><div class="cds-tooltip"></div><div class="cds-dialog"></div></body></html>`);
    await page.addStyleTag({ content: await stylesheet(core) });
    for (const selector of ['.cds-menu', '.cds-select__popup', '.cds-tooltip']) {
      await expect(page.locator(selector)).toHaveCSS('font-family', /Figtree/);
    }
    const action = await page.locator('.cds-menu__action').evaluate((node) => ({ actual: getComputedStyle(node).color, token: getComputedStyle(node).getPropertyValue('--cds-action').trim() }));
    expect(action.actual).toBe(await page.evaluate((token) => { const el = document.createElement('span'); el.style.color = token; document.body.append(el); const color = getComputedStyle(el).color; el.remove(); return color; }, action.token));
    await expect(page.locator('.cds-dialog')).toHaveCSS('color-scheme', theme);
  });
}

test('header texture is opt-in and makes no implicit asset request', async ({ page }) => {
  await page.setContent('<header class="cds-header"></header>');
  await page.addStyleTag({ content: await stylesheet(core) });
  expect(await page.locator('.cds-header').evaluate((node) => getComputedStyle(node, '::before').backgroundImage)).toBe('none');
});

test('a failed avatar can recover when its source changes', async ({ page }) => {
  await page.route('**/image-missing.svg', (route) => route.fulfill({ status: 404, body: '' }));
  await page.goto(harness);
  await expect(page.locator('.cds-avatar')).toHaveText('SA');
  await page.getByRole('button', { name: 'Change avatar' }).click();
  await expect(page.locator('img.cds-avatar')).toHaveCount(1);
  await expect.poll(() => page.locator('img.cds-avatar').evaluate((image) => (image as HTMLImageElement).naturalWidth)).toBe(2);
});

test('denied browser storage does not break the existing theme or toggle', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new DOMException('Storage denied', 'SecurityError'); };
    Storage.prototype.setItem = () => { throw new DOMException('Storage denied', 'SecurityError'); };
  });
  await page.goto(harness);
  await expect(page.getByRole('button', { name: 'Theme: light' })).toBeVisible();
  await page.getByRole('button', { name: 'Theme: light' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(errors).toEqual([]);
});
