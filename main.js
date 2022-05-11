// Modules
const { app, BrowserWindow, Menu, MenuItem } = require("electron");
const windowStateKeeper = require('electron-window-state');
const { webContents } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, secondWindow;

// defining menu
let mainMenu = Menu.buildFromTemplate(require('./mainMenu'))

// context menu
let contextMenu = Menu.buildFromTemplate([
  {label: 'Item 1'},
  {role: 'editMenu'}
])


// Create a new BrowserWindow when `app` is ready
function createWindow() {

  // setting default menu as mainMenu
  Menu.setApplicationMenu(mainMenu)

  //window state manager
  let WinState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });

  mainWindow = new BrowserWindow({
    width: WinState.width,
    height: WinState.height,
    // x and y coordinates for window position after closing and reopening
    'x': WinState.x,
    'y': WinState.y,
    // now it can be minimized till this only
    minWidth: 300, minHeight:150,
    webPreferences: {
      // --- !! IMPORTANT !! ---
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      contextIsolation: false,
      nodeIntegration: true,
    },
    backgroundColor: "#2B2E3B",
    // frame: false,
    // shows minimize, maximize and close buttons at top
    // titleBarStyle: 'hidden',
    // titleBarOverlay: true,
    autoHideMenuBar: false
  });


  // when second window is closed, mainwindow gets maximized
  // secondWindow.on('closed', ()=>{
  //   mainWindow.maximize()
  // })

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile("index.html");

  // create context menu
  mainWindow.webContents.on('context-menu', e => {
    contextMenu.popup()
  })

  // secondWindow.loadFile("secondary.html");

  // Open DevTools - Remove for PRODUCTION!
  // mainWindow.webContents.openDevTools();

  let wc = mainWindow.webContents
  // console.log(wc)
  WinState.manage(mainWindow)

  // console.log(webContents.getAllWebContents())
  // will log when finished loading
  wc.on('did-finish-load', ()=>{
    console.log('finished loading')
  })

  

  // helps in focusing on default window
  // mainWindow.on('focus', ()=>{
  //   console.log('Main window focus')
  // })
  // secondWindow.on('focus', ()=>{
  //   console.log('Second window focus')
  // })

  // helps in focussing on our whole app, disregarding of any window
  // app.on('browser-window-focus',()=>{
  //   console.log('App focussed')
  // })

  // console.log(BrowserWindow.getAllWindows())

  // Listen for window being closed
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// Electron `app` is ready
app.on("ready", createWindow);

// Quit when all windows are closed - (Not macOS - Darwin)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
