import { app, BrowserWindow } from 'electron';
import { application } from '../config.json';
import * as webapp from '../src/main.js';

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'YouTube DLjs',
        autoHideMenuBar: !application.isDev,
        webPreferences: {
            devTools: application.isDev,
        }
    });

    webapp;

    win.loadURL(`http://localhost:${application.port}/`);
}

app.on('ready', () => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) return createWindow();
    });
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') return app.quit();
});