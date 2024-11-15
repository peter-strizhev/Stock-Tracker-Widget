const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 200,
        frame: false, // removes window frame
        transparent: true, // makes window transparent
        // alwaysOnTop: true, // keeps it on top
        resizable: false,
        movable: true,
    });

    win.loadFile('frontEnd/index.html');
}

app.on('ready', createWindow);
