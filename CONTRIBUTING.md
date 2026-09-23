# Contributing

This system grows from real use. Add something when a product needs it, not
before. The KOL leaderboard needed everything that is here today. Nothing was
added on speculation, and that keeps the system small enough to understand.

Before you start, read the [six rules in the README](README.md#six-rules).

## The layout

```
src/
  tokens.css                 every colour, face and shape, once per theme
  base.css                   reset, page ground, .cds-sr-only
  styles.css                 the fonts, then everything else, in order
  index.ts                   every export
  components/<name>/
    <Name>.tsx               the React component
    <name>.css               its styles, reading tokens only
showcase/                    a page with every token and component
tests/visual.spec.ts         screenshots of the showcase, compared on every run
```

Class names follow one pattern: `cds-<component>`, `cds-<component>__<part>` for
a piece inside it, and `cds-<component>--<variant>` for a variant. For example
`cds-dialog`, `cds-dialog__body`, `cds-badge--critical`.

## Change a token's value

1. Edit the value in `src/tokens.css`. If only one theme changes, edit only that
   block.
2. Run `npm run dev` and look at the showcase in both themes.
3. Check contrast if it is text or a line. Text needs 4.5:1 against the surface
   it sits on. Lines and icons need 3:1.
4. Run `npm run test:visual`. Expect it to fail everywhere the token is used.
   Check each failure is a change you meant, then run
   `npm run test:visual:update` and commit the new screenshots with your change.

## Add a token

Add one only when no existing token means what you need. Two tokens with the
same values in both themes are one token with two names. That was the mess this
system replaced, when 50 tokens turned out to hold only 41 distinct values.

1. Pick the group it belongs to and a name that says what it is for, not what it
   looks like: `--cds-tone-caution-ink`, not `--cds-orange`.
2. Add it to the `:root` block in `src/tokens.css`. If the light value differs,
   add it to the light block too.
3. Add it to the token table in the README.
4. The showcase lists tokens straight from `tokens.css`, so its swatch appears
   by itself. Update the visual references.

## Add a component

1. Make sure a product needs it now. Write that product in the pull request.
2. Create `src/components/<name>/` with `<Name>.tsx` and `<name>.css`.
3. Build interactive parts on [Base UI](https://base-ui.com) primitives, which
   are already a dependency. They handle focus, keyboard use and screen readers.
   Wrap one rather than writing your own.
4. Start the file with a short comment: what it is for, and when not to use it.
5. In the CSS, read tokens only. Start the file with a one-line comment naming
   the component and its parts.
6. If it renders in a portal (a popup, a menu, anything that floats), check it in
   both themes. Portals sit outside the page wrapper and only see what is on
   `:root`.
7. Export it from `src/index.ts`, and add its stylesheet to `src/styles.css`.
   Components are imported from the page frame inward to the data, so a new one
   usually goes near the component it relates to.
8. Add a section for it to `showcase/Showcase.tsx` with realistic content, and
   any open state to `tests/visual.spec.ts`.
9. Add it to the component table in the README.
10. Run `npm run check`.

## Change a component

Keep the component's props backward compatible when you can: add an optional
prop rather than changing what an existing one means. If you cannot, it is a
breaking change. See below.

Before you merge, open every product that uses the system and look at the
component there. The visual tests only cover the showcase.

## Check your work

```bash
npm run check
```

That runs the typecheck, the linter, the showcase build and the visual tests.
All four must pass.

Screenshots are the check that matters most. Three bugs have reached production
while every automated test passed: a dialog with no background, a menu that
opened invisibly, and a dialog wider than its own maximum. All three were CSS,
and all three would have failed a screenshot.

## Release

1. Bump `version` in `package.json`. This project follows
   [semantic versioning](https://semver.org):
   - patch (0.1.1) for a fix that changes nothing anyone relies on
   - minor (0.2.0) for something new: a component, a prop, a token
   - major (1.0.0) for a breaking change
2. Add an entry at the top of `CHANGELOG.md`: what changed, and for a breaking
   change, what a product has to do about it.
3. Merge to `main`, then tag it: `git tag v0.2.0 && git push origin v0.2.0`.
4. In each product, update the tag in `package.json`, run it, and look at it.

## What counts as breaking

- Removing or renaming a token, component, prop or export.
- Changing what a prop means, or its default.
- Renaming a class that products target in their own CSS.
- Changing a token's value in a way that fails contrast somewhere it is used.

A change that only moves pixels, such as a new padding or a tuned colour, is not
breaking. Say so in the changelog anyway, so products know to look.
