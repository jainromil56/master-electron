// Modules
const { app, BrowserWindow } = require("electron");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, secondWindow;

// Create a new BrowserWindow when `app` is ready
function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      // --- !! IMPORTANT !! ---
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      contextIsolation: false,
      nodeIntegration: true,
    },
    backgroundColor: "#2B2E3B",
  });

  secondWindow = new BrowserWindow({
    width: 700,
    height: 300,
    webPreferences: {
      // --- !! IMPORTANT !! ---
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      contextIsolation: false,
      nodeIntegration: true,
    },
    backgroundColor: "#2B2E3B",
    // parent means attaching this to parent and when we quit parent, child gets quit automatically
    parent: mainWindow,
    // making modal: true will make secondary window to stay until its closed
    modal: true,
    // show is false for not showing initially
    show: false 
  });

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile("index.html");
  secondWindow.loadFile("secondary.html");

  // window will appear after 2 sec and dissapear after 3 sec
  setTimeout( () => {
    secondWindow.show()
    setTimeout(() => {
      secondWindow.close()
      secondWindow = null
    }, 3000);
  }, 2000)

  // Open DevTools - Remove for PRODUCTION!
  // mainWindow.webContents.openDevTools();

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
