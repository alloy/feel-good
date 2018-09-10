// const electron = require('electron')
//   // Module to control application life.
// const app = electron.app
//   // Module to create native browser window.
// const BrowserWindow = electron.BrowserWindow

// const path = require('path')
// const url = require('url')

// // Keep a global reference of the window object, if you don't, the window will
// // be closed automatically when the JavaScript object is garbage collected.
// let mainWindow


import { app, BrowserWindow } from "electron"

function createWindow() {
  const window = new BrowserWindow({ minWidth: 300, minHeight: 300 })
  window.loadFile("./index.html")
  
  // Open the DevTools.
  // window.webContents.openDevTools()
}

app.on("ready", createWindow)

// Quit when all windows are closed.
// app.on('window-all-closed', function() {
//   // On OS X it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// app.on('activate', function() {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) {
//     createWindow()
//   }
// })