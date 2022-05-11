# Master Electron - Course Code

Demo project modified from: https://github.com/electron/electron-quick-start

<img width='30%' src='https://raw.githubusercontent.com/stackacademytv/master-electron/master/splash.png'/>

### To run electron globally

```
npm i -g electron
electron     //to launch electron
electron .   //to launch current project with electron
npm start    //Or use this simple command

npm run nodemon --exec electron .    //Automatically Rerender
//OR
npm run watch    //To automatically renrender
```

### Commands to be known

- To know package dependencies -> npm list --depth=0
- when using nodemon use <b>rs</b> to restart

### Points to be known

- #### using chrome inspector

  - Run -> electron --inspect=5858 .
  - navigate in chrom browser to -> chrom://inspect -> configure -> localhost:5858 -> [check] enable port forwarding -> click inspect below Remote targer
  - Now you can see whole inspect in different window
  - electron --inspect-brk=5858 . -> for using with breakpoints while debugging
    - then click on down arrow in inspect window via chrome to step in to each step

- #### Important Links to learn

  - #### Browser Window
    - Parent and child windows -> <a href="https://www.electronjs.org/docs/latest/api/browser-window">Browser window </a>

    ```
    ...
    backgroundColor: "#2B2E3B",
    // parent means attaching this to parent and when we quit parent, child gets quit automatically
    parent: mainWindow,
    // making modal: true will make secondary window to stay until its closed
    modal: true,
    // show is false for not showing initially
    show: false,
    frame: false   //for frameless window
    });


    // To show window
    // window will appear after 2 sec and dissapear after 3 sec
    setTimeout( () => {
    secondWindow.show()
    setTimeout(() => {
      secondWindow.close()
      secondWindow = null
    }, 3000);
    }, 2000)
    ```
    - <a href="https://www.electronjs.org/docs/latest/api/browser-window#new-browserwindowoptions">New Browser window options</a>
    - <a href="https://www.electronjs.org/docs/latest/api/browser-window#instance-events">Instance Events </a> -> These events are specific to any browser window
    - <a href="https://www.electronjs.org/docs/latest/api/browser-window#static-methods">Static Events </a> -> console.log this to know values
  
  - <a href='https://www.npmjs.com/package/electron-window-state'>electron-window-state</a> -> A npm library to store and restore window sizes and positions for your Electron app
  
  - #### webContents -> its an very large api you can console.log to see properties
    - <a href='https://www.electronjs.org/docs/latest/api/browser-window#winwebcontents-readonly'>webContents readonly</a>
    - <a href='https://www.electronjs.org/docs/latest/api/web-contents'>webContents</a>
  
  - #### <a href='https://www.electronjs.org/docs/latest/api/session'>Session</a> 
    - session.defaultSession -> uses persistent partition by default
    - you can divide sessions according to window, i.e. new window with new localstorage, & you can also use same localstorage for all over app - watch 15 video 
      - make partition - let customSes = session.fromPartition('part1')
      - assign it to second window as session: customSes (this will allocate new localstorage to 2nd window)
    - ses.clearStorageData() - to clear storage
    - ses.clearCache() - clears cache 
  
  - #### <a href='https://www.electronjs.org/docs/latest/api/cookies'>Class: Cookies</a>
    - You can set cookie and then get cookie from app, check code on documentation

  - #### <a href='https://www.electronjs.org/docs/latest/api/download-item'>Class: DownloadItem</a>
    - DownloadItem is an EventEmitter that represents a download item in Electron. It is used in will-download event of Session class, and allows users to control the download item.
    - learn about NodeJs Event Emitter <a href='https://nodejs.org/api/events.html#class-eventemitter'>here</a>
    ```
    In HTML
    <a href='splash.png' download>Download Image</a>

    <!-- getFilename() gets downloading file name -->
    let fileName = downloadItem.getFilename()
    <!-- setSavePath will save our downloaded file in selected path -->
    downloadItem.setSavePath(app.getPath('desktop') + `/${fileName}`)
    ```
    - getTotalBytes() -> returns bytes in Integer
    - you can also make progress bar for downloading with real time update, watch 17 video from 8 min
    - use this website to copy link for downloading different types of files -> <a href='https://file-examples.com/'>File Examples</a>

  - #### <a href='https://www.electronjs.org/docs/latest/api/dialog'>Dialog</a>
    - you can open dialog box of File manager and select any folder and get that location in using app.getPath('desktop')
    ```
    const { dialog } = require('electron')
    
    mainWindow.webContents.on('did-finish-load', ()=>{

      dialog.showOpenDialog({
        buttonLabel: 'Select a photo',
        defaultPath: app.getPath('desktop'),
        properties: ['multiSelections','createDirectory', 'openFile', 'openDirectory']         
      }).then( result => {
        console.log(result)
      })
    })
    ```
      - multiSelections -> for selecting multiple files
      - createDirectory -> shows create new folder icon (macos)

    - showSaveDialog() -> for writing name of file for saving in File system
    ```
    dialog.showSaveDialog({}).then( result => {
      console.log(result)  // o/p - file path with file name
    })
    ```
    - showMessageBox() -> for showing popupbox
    ```
    const answer = ['Yes', 'No', 'Maybe']

    dialog.showMessageBox({
      title: 'Message Box',
      message: 'Please select an option',
      detail: 'Message details.',
      buttons: answer
    }).then( result => {
      console.log(`User selected: ${answer[result.response]}`)
    })
    ```

  - #### <a href='https://www.electronjs.org/docs/latest/api/accelerator'>Accelerator</a>
    - Define keyboard shortcuts for you app, ex- in vs code we have many shortcuts, which is built with electronJs

  - #### Menu and MenuItem
    - Define menu just like defined in vscode with <a href='https://www.electronjs.org/docs/latest/api/menu'>Menu</a> and <a href='https://www.electronjs.org/docs/latest/api/menu-item'>MenuItem</a>
    - you can learn about Menu.buildFromTemplate(), role, click, accelerator, label, submenu
    - role such as copy, redo, undo, paste, toggleFullScreen, toggleDevTools, selecAll 
    - you can set role: 'editMenu' for all cammands to have autmatically

  - #### context-menu -> check code in commit

  - #### <a href='https://www.electronjs.org/docs/latest/api/tray'>Tray</a>
    - tray is something that is available on top right on macos and bottom left on windows navigation bar
    - <a href='https://www.electronjs.org/docs/latest/api/tray#traysettooltiptooltip'>setToolTip</a> for showing popup on hover
    - you can add menu, onclick events, Check commit for more
