const { app, BrowserWindow, Menu, MenuItem, ipcMain } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 660,
    minHeight: 660,
    maxHeight: 1860,
    minWidth: 400,
    title: "Launch Pad",
    frame: true,
    titleBarOverlay: {
      symbolColor: "#404040",
      height: 30,
    },
  });

  //win.loadURL("file://${__dirname}/index.html");
  mainWindow.loadURL("http://localhost:3000");
  //Remove menu bar
  mainWindow.removeMenu();

  mainWindow.on("closed", () => {
    app.quit();
  });
}

//app.on("ready", createWindow);

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
