import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';
import { URL } from 'node:url';

const root = new URL('../../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');

test('font-free CSS entry exports every component without remote imports', async () => {
  const pkg = JSON.parse(await read('package.json'));
  assert.equal(pkg.exports['./core.css'], './src/core.css');
  assert.equal(pkg.exports['./fonts.css'], './src/fonts.css');
  const core = await read('src/core.css');
  assert.ok(core.includes('@import "./tokens.css"'));
  assert.ok(core.includes('@import "./base.css"'));
  assert.doesNotMatch(core, /https?:|fonts\.css/);
  for (const name of await readdir(new URL('src/components/', root))) {
    const styles = (await readdir(new URL(`src/components/${name}/`, root))).filter((path) => path.endsWith('.css'));
    for (const style of styles) assert.ok(core.includes(`./components/${name}/${style}`));
  }
  const legacy = await read('src/styles.css');
  assert.match(legacy, /@import "\.\/fonts\.css";\s*@import "\.\/core\.css";/);
  assert.equal((await read('src/fonts.css')).match(/@import/g)?.length, 3);
});

test('CSS-only consumers do not auto-install React component peers', async () => {
  const pkg = JSON.parse(await read('package.json'));
  for (const peer of ['react', 'react-dom', '@base-ui/react', 'lucide-react']) {
    assert.equal(pkg.peerDependenciesMeta?.[peer]?.optional, true, peer);
    assert.ok(pkg.peerDependencies[peer]);
  }
});

test('eight categorical chart identities have per-theme line contrast', async () => {
  const css = await read('src/tokens.css');
  const blocks = css.split(':root[data-theme="light"]');
  const token = (text, name) => text.match(new RegExp(`--cds-${name}:\\s*(#[a-fA-F0-9]{6})\\s*;`))?.[1];
  const luminance = (hex) => {
    const rgb = [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16) / 255)
      .map((value) => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
    return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
  };
  for (const block of blocks) {
    const palette = Array.from({ length: 8 }, (_, i) => token(block, `chart-${i + 1}`));
    assert.ok(palette.every(Boolean));
    assert.equal(new Set(palette).size, 8);
    for (const color of palette) {
      for (const surface of ['surface', 'surface-raised']) {
        const values = [luminance(color), luminance(token(block, surface))].sort((a, b) => a - b);
        assert.ok((values[1] + .05) / (values[0] + .05) >= 3, `${color} against ${surface}`);
      }
    }
  }
});

test('pure prepaint theme entry works without React or browser storage', async () => {
  const pkg = JSON.parse(await read('package.json'));
  assert.equal(pkg.exports['./theme'], './src/theme.ts');
  const source = await read('src/theme.ts');
  assert.doesNotMatch(source, /from\s+['"]react/);
  const ts = await import('typescript');
  const { runInNewContext } = await import('node:vm');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const node = { theme: 'light', getAttribute() { return this.theme; }, setAttribute(_, value) { this.theme = value; } };
  const denied = { exports: {}, window: { get localStorage() { throw new Error('Denied'); } }, document: { documentElement: node } };
  runInNewContext(code, denied);
  assert.equal(denied.exports.initializeTheme(), 'light');
  assert.equal(node.theme, 'light');
  const saved = { exports: {}, window: { localStorage: { getItem: (key) => key === 'legacy-theme' ? 'dark' : null } }, document: { documentElement: node } };
  runInNewContext(code, saved);
  assert.equal(saved.exports.initializeTheme({ storageKey: 'legacy-theme' }), 'dark');
  assert.equal(node.theme, 'dark');
  const ssr = { exports: {} };
  runInNewContext(code, ssr);
  assert.equal(ssr.exports.initializeTheme(), 'dark');
});
