# WinMetta Retreat Electron

[retreat.winmetta.org](https://retreat.winmetta.org) Desktop(Electron) app for macOS, Windows and Linux.
The app is created to avoid browser's restriction on playing sound periodically.


[![Release](https://github.com/ninegene/winmetta-retreat/actions/workflows/release.yml/badge.svg)](https://github.com/ninegene/winmetta-retreat/actions/workflows/release.yml)
 

## Install on macOS

1. Go to [github.com/ninegene/winmetta-retreat/releases](https://github.com/ninegene/winmetta-retreat/releases) and download `winmetta-retreat-darwin-x64-x.x.x.zip`
2. Double-click the zip to extract the app
3. Open **Terminal** and run the following command to remove the quarantine attribute (replace the path if needed):
   ```bash
   xattr -cr ~/Downloads/winmetta-retreat.app
   ```
4. Open the app — if macOS still shows an "unidentified developer" warning, go to **System Settings → Privacy & Security** and click **Open Anyway**
5. Move the app to your **Applications** folder from Finder

## Install on Windows

1. Go to [github.com/ninegene/winmetta-retreat/releases](https://github.com/ninegene/winmetta-retreat/releases) and download `winmetta-retreat Setup x.x.x.exe`
2. Run the installer — it installs silently and launches the app automatically
3. The app will appear in the Start menu as **winmetta-retreat**

If Windows SmartScreen shows an "unrecognized app" warning, click **More info → Run anyway**.

## Install on Ubuntu/Debian

1. Go to [github.com/ninegene/winmetta-retreat/releases](https://github.com/ninegene/winmetta-retreat/releases) and download `winmetta-retreat_x.x.x_amd64.deb`
2. Install the package:
   ```bash
   sudo dpkg -i winmetta-retreat_x.x.x_amd64.deb
   ```
3. Launch from the Applications menu or run `winmetta-retreat` in a terminal

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
