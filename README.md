# Marlon Silva — personal site

Jekyll site for [marlonjsilva.com.br](https://marlonjsilva.com.br), built on the **Hermes Design System**: paper/field brutalism, cream-and-green "Verdant" palette, oversized condensed type, terminal motifs.

## Structure

- `_sass/` — design tokens and components (`_tokens`, `_base`, `_layout`, `_components`, `_prose`, `_fonts`)
- `_layouts/` — page shells (home, post, page, archive)
- `_includes/` — nav, footer, seal, post list, head
- `_data/site.yml` — navigation, social links, and the home focus blocks
- `assets/fonts/` — self-hosted Oswald, Inter, JetBrains Mono (SIL OFL, see `LICENSE-OFL.txt`)
- `assets/js/hermes.js` — wordmark fitting, scroll reveals, mobile menu (no dependencies)

## Local development

```sh
bundle install
bundle exec jekyll serve
```

Requires Ruby >= 3.4 and Jekyll 3.10 (see `no-style-please.gemspec`).

## Notes

- Content dates use `theme_config.date_format: "%Y.%m.%d"`.
- Colour, type, spacing, and motion values live only in `_sass/_tokens.scss`; components never hard-code a hex value.
- Motion honours `prefers-reduced-motion`; the site is readable with JavaScript disabled.
