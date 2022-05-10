module.exports = [
  // define menu items and its submenu
  {
    label: "Electron",
    submenu: [
      { label: "Item 1" },
      { label: "Item 2", submenu: [{ label: "submenu 1" }] },
      { label: "Item 3" },
    ],
  },
  {
      label: "Edit",
      submenu: [
        //   we can just define role and label will be given automatically with shortcut
          {role: 'undo'},
          {role: 'redo'},
          {role: 'copy'},
          {role: 'paste'},
          {role: 'selectAll'},
        //   all above roles will be predefined here
          {role: 'editMenu'}
      ]
  },
  {
    label: "Actions",
    submenu: [
      {
        label: "DevTools",
        // role as toogle dev tools
        role: "toggleDevTools",
      },
      {
        label: "Fullscreen",
        // role as toogle dev tools
        role: "toggleFullScreen",
      },
      {
        label: "Action 1",
        // disables menu item
        enabled: false,
      },
      { label: "Action 2", submenu: [{ label: "submenu 1" }] },
      {
        label: "Greet",
        // action after menu item is clicked
        click: () => {
          console.log("Hello from main menu");
        },
        // define shortcut for menu item
        accelerator: "shift+alt+G",
      },
    ],
  },
];
