# WinMetta Retreat Electron

[retreat.winmetta.org](https://retreat.winmetta.org) Desktop(Electron) app for macOS, Windows and Linux.
The app is created to avoid browser's restriction on playing sound periodically.

See [docs](/docs) folder on install guide.

[![Release](https://github.com/ninegene/winmetta-retreat/actions/workflows/release.yml/badge.svg)](https://github.com/ninegene/winmetta-retreat/actions/workflows/release.yml)
 

## Development

### Start Electron App

```script
npm run dev
```

## Notes on creating distributable app

See: <https://github.com/electron/electron-packager#supported-platforms>

### Platforms

- Windows: `win32`
- macOS: `darwin` or `mas`
- Linux: `linux`

### Arch

- `ia32`, `x64`, `armv7l`, `arm64`, `mips64el`


## Setup Github Workflow

Based on: <https://dev.to/erikhofer/build-and-publish-a-multi-platform-electron-app-on-github-3lnd>

## Initial Setup Notes

Based on: <https://www.electronjs.org/docs/tutorial/quick-start>
