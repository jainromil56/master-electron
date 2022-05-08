# Master Electron - Course Code

Demo project modified from: https://github.com/electron/electron-quick-start

_Modified for improved screen real estate and for the sake of consistent versioning._

![Master Electron](https://raw.githubusercontent.com/stackacademytv/master-electron/master/splash.png)

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

### Points to be known

- using chrome inspector

  - Run -> electron --inspect=5858 .
  - navigate in chrom browser to -> chrom://inspect -> configure -> localhost:5858 -> [check] enable port forwarding -> click inspect below Remote targer
  - Now you can see whole inspect in different window
  - electron --inspect-brk=5858 . -> for using with breakpoints while debugging
    - then click on down arrow in inspect window via chrome to step in to each step

- Important Links to learn

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
