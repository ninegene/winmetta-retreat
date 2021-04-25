// const electron = require('electron')
// const { app, BrowserWindow, Menu, MenuItem, globalShortcut } = electron
const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDevEnv = process.env.ENVIRONMENT === 'DEV';

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: isDevEnv ? 1600 : 800,
    height: isDevEnv ? 1024 : 800,
    webPreferences: {
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  //win.loadFile('index.html')
  const startUrl ='https://retreat.winmetta.org'
  // handleFailLoad(mainWindow, startUrl)

  mainWindow.loadURL(startUrl)

  if (isDevEnv) {
    mainWindow.openDevTools()
  }
  //registerGlobalShortcut(mainWindow)
  // registerLocalShortcuts(mainWindow)
}

// function handleFailLoad(mainWindow, startUrl) {
//   let failedLoadTimeout = 2000

//   mainWindow.webContents.on('did-fail-load', (event, errorCode) => {
//     console.log('did-fail-load: errorCode', errorCode);
//     console.log('did-fail-load: event.sender.getUrl()', event.sender && event.sender.getUrl && event.sender.getUrl());
//     setTimeout(function() {
//       console.log('Trying to load: ' + startUrl + ' after ' + failedLoadTimeout);
//       mainWindow.loadURL(startUrl);
//       // increment timeout to prevent keep reloading
//       failedLoadTimeout *= 2;  // double timeout
//       if (failedLoadTimeout > 60000) {
//         failedLoadTimeout = 2000
//       }
//     }, failedLoadTimeout);
//   });
// }

// function registerLocalShortcuts(win) {
//   const menu = new Menu();
//   menu.append(new MenuItem({
//     label: 'Refresh',
//     accelerator: 'CmdOrCtrl+R',
//     click: () => { win.reload() }
//   }))
//   menu.append(new MenuItem({
//     label: 'Refresh',
//     accelerator: 'f5',
//     click: () => { win.reload() }
//   }))
//   menu.append(new MenuItem({
//     label: 'Refresh Ignoring Cache',
//     accelerator: 'CmdOrCtrl+Shift+R',
//     click: () => { win.reloadIgnoringCache() }
//   }))
//   menu.append(new MenuItem({
//     label: 'Toggle Dev Tools',
//     accelerator: 'f12',
//     click: () => { toggleDevTools(win) }
//   }))
//   menu.append(new MenuItem({
//     label: 'Toggle Dev Tools',
//     accelerator: 'CmdOrCtrl+Alt+J',
//     click: () => { toggleDevTools(win) }
//   }))
// }

// function toggleDevTools(win) {
//   win.isDevToolsOpened() ? win.closeDevTools() : win.openDevTools();
// }

// function registerGlobalShortcut(window) {
//   const reload = () => {
//     if (remote) {
//       remote.getCurrentWindow().reload()
//     }
//     console.log('remote', remote)
//   }
//   const unregister = () => {
//     globalShortcut.unregister('CommandOrControl+R', reload)
//   }
//   const register = () => {
//     globalShortcut.register('CommandOrControl+R', reload) // or 'F5';
//   }

//   register()

//   window.addEventListener('focus', register)
//   window.addEventListener('blur', unregister)
//   window.addEventListener('beforeunload', unregister)
// }

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
