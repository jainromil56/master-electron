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
  
  - #### <a href='https://www.electronjs.org/docs/latest/api/cookies'>Cookies</a>
    - You can set cookie and then get cookie from app, check code on documentation

