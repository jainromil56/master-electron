# Master Electron - Course Code

Demo project modified from: https://github.com/electron/electron-quick-start

*Modified for improved screen real estate and for the sake of consistent versioning.*

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

### Points to be known

- using chrome inspector
    - Run -> electron --inspect=5858 .
    - navigate in chrom browser to -> chrom://inspect -> configure -> localhost:5858 -> [check] enable port forwarding -> click inspect below Remote targer
    - Now you can see whole inspect in different window
    - electron --inspect-brk=5858 . -> for using with breakpoints while debugging
        - then click on down arrow in inspect window via chrome to step in to each step
