const electron = require('electron');

const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      height:600,
      width: 300,
     // resizable: true,
      frame: false,
      show: false,
      webPreferences: { backgroundThrottling: false }
    });

    this.loadURL(url);
    this.on('blur', this.onBlur.bind(this));
   
  }

  onBlur() {
    this.hide();
  }

}



module.exports = MainWindow;