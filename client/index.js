const {app, BrowserWindow} = require('electron');
let win

app.on('ready', function() {
  win = new BrowserWindow({width: 800, height: 600});

  win.loadURL(`file://${__dirname}/index.html`);
});
