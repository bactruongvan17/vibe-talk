import { app, BrowserWindow } from "electron";
import * as path from "path";
// import { fileURLToPath } from "url";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    transparent: true,
    frame: true,
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.webContents.openDevTools();

  // win.loadFile("index.html");
  win.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
