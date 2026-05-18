# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## What this is

A minimal Electron desktop app that wraps [retreat.winmetta.org](https://retreat.winmetta.org) in a native window. The sole purpose is to bypass browser restrictions on periodic audio playback. There is no local frontend — the app just loads the remote URL.

## Commands

```bash
npm run dev        # Start in dev mode (wider window + DevTools open)
npm start          # Start without dev tools
npm run make       # Build distributable for current platform
npm run make-macos-x64
npm run make-linux-x64-deb
npm run make-windows-x64
npm run publish    # Publish release to GitHub (requires GITHUB_TOKEN)
```

To cut a release: bump version and push tags with `./release.sh` (runs `npm version minor && git push --follow-tags`). GitHub Actions then builds and publishes for macOS, Linux, and Windows on any `v*` tag push.

## Architecture

- [main.js](main.js) — Electron main process. Creates a `BrowserWindow` and loads `https://retreat.winmetta.org`. `ENVIRONMENT=DEV` widens the window and opens DevTools.
- [preload.js](preload.js) — Runs in the renderer context with `contextIsolation: true` and `sandbox: true`. Exposes only `window.versions` (node/chrome/electron) via `contextBridge`. The renderer has no Node.js access.
- [index.html](index.html) — Unused placeholder (app loads the remote URL, not a local file).
- Build/publish configured via `electron-forge` in `package.json` → `config.forge`. Publishes drafts to GitHub (`ninegene/winmetta-retreat`).
