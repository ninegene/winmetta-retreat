# WinMetta Retreat Electron

## Start Electron App

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

### Building Windows apps from non-Windows platforms

Building an Electron app for the Windows target platform requires editing the Electron.exe file. Currently, Electron Packager uses node-rcedit to accomplish this. A Windows executable is bundled in that Node package and needs to be run in order for this functionality to work, so on non-Windows host platforms, Wine 1.6 or later needs to be installed. On macOS, it is installable via Homebrew.

<https://github.com/electron/electron-packager#building-windows-apps-from-non-windows-platforms>

```script
brew install wine-stable
```

Can't build windows app on MacOS.

TODO: look into using github actions e.g. <https://gist.github.com/azu/673426500458f63f019c8f5e013f282a>

## Setup Github Workflow

Based on: <https://dev.to/erikhofer/build-and-publish-a-multi-platform-electron-app-on-github-3lnd>

## Initial Setup Notes

Based on: <https://www.electronjs.org/docs/tutorial/quick-start>
