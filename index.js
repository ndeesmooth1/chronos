const electron = require('electron');
const path = require('path');
const TimerTray = require('./app/timer_tray');
const MainWindow = require('./app/main_window');
let data = require('./data/default');
const fs = require('fs');


const { app, ipcMain } = electron;

const json = JSON.stringify(data);
const pathToFolder = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Documents/ChronosApp' : '/var/local/ChronosApp');
const pathToData = `${pathToFolder}/data.json`;

console.log(pathToData);

if(fs.existsSync(pathToData)) {
  fs.readFile(pathToData, 'utf8', (err, content) => {
    data = JSON.parse(content);
  })
}

if (!fs.existsSync(pathToData)) {
  if(!fs.existsSync(pathToFolder)){
    fs.mkdirSync(pathToFolder);
  }
  fs.writeFile(pathToData, json, 'utf8', () => {
    console.log('file created'); 
  });
}


let mainWindow;
let tray;
let store;

  app.on('ready', () => {

    app.dock.hide();
  
    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
  
    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  
    tray = new TimerTray(iconPath , mainWindow);
    
    //mainWindow.webContents.openDevTools();

    
   
    
  });

  ipcMain.on('ready-for-data', (event) => {
    mainWindow.webContents.send('data-sent', data);
  })

ipcMain.on('update-timer', (event, timeLeft) => {
  tray.setTitle(timeLeft);
});

ipcMain.on('create-task',(event, task)=>{

  data.tasks = [task, ...data.tasks]
  const json = JSON.stringify(data);

  fs.writeFile(pathToData, json, 'utf8', () => {
    fs.readFile(pathToData, 'utf8', (err, content) => {
      data = JSON.parse(content);
      mainWindow.webContents.send('data-sent', data);
    })
  });

})

ipcMain.on('delete-task',(event, task)=>{

  data.tasks = data.tasks.filter(item => item.id !== task.id);
  const json = JSON.stringify(data);

  fs.writeFile(pathToData, json, 'utf8', () => {
    fs.readFile(pathToData, 'utf8', (err, content) => {
      data = JSON.parse(content);
      mainWindow.webContents.send('data-sent', data);
    })
  });

 
})

ipcMain.on('update-settings',(event, newSettings ) => {

  
  data.timer.time = newSettings.time;
  data.timer.unit = newSettings.unit;
  const json = JSON.stringify(data);

  fs.writeFile(pathToData, json, 'utf8', () => {
    fs.readFile(pathToData, 'utf8', (err, content) => {
      data = JSON.parse(content);
    })
  });
})

ipcMain.on('reset', (event, defaultSettings) => {


  console.log(defaultSettings);

  const json = JSON.stringify(defaultSettings);



  fs.writeFile(pathToData, json, 'utf8', () => {
    fs.readFile(pathToData, 'utf8', (err, content) => {
      data = JSON.parse(content);
      mainWindow.webContents.send('data-sent', data);
    })
  });


})
