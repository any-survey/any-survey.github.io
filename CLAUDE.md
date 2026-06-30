# CLAUDE.md

## What this repository is

This repository (`any-survey/any-survey.github.io`) is a **deploy-only repository**. It exists solely to host pre-built static artifacts on GitHub Pages. It does **not** contain source code.

- The site's source code is managed in a **separate repository: `trendy`**.
- Build artifacts produced in `trendy` are synced into this repo's `docs/` directory and pushed to `main`.
- A push to `main` triggers `.github/workflows/static.yml`, which deploys `docs/` to GitHub Pages.
- Deploy commits follow the pattern `deploy` or `deploy: sync from trendy@<sha>` — the `<sha>` references the source commit in `trendy`.

## Do not edit build output here

Files under `docs/` (HTML, `_next/`, `assets/`, `sitemap.xml`, etc.) are generated. **Editing them here is almost always wrong** — changes will be overwritten by the next sync from `trendy`, and the real fix belongs in the `trendy` source repo.

If a content, layout, or SEO change is needed (e.g. page `<title>`/meta, test pages, sitemap), make it in **`trendy`**, then re-sync.

## Live site

- Production URL: https://any-survey.github.io/
- The site has multiple personality/survey tests, each in 3 locales: root (Korean default, no prefix), `/en`, `/ja`.
- The authoritative list of live pages is the **live sitemap** (`https://any-survey.github.io/sitemap.xml`), not the local `docs/` — the local checkout can lag behind the deployed state.

## Acceptable edits in this repo

Only repo-level infrastructure that is genuinely owned here:
- `.github/workflows/static.yml` (the Pages deploy workflow)
- `CLAUDE.md`, repo settings, `.nojekyll`

Anything under `docs/` should be changed upstream in `trendy`.
