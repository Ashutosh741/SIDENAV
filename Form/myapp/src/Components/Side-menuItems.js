// here we are exporting the menu content 
// now in the we'll have a header, in which something navbar will be fixed
// after it we have to show the items of the sidenav
// to do so their should be something , to map items of the sidebar once, how to do it?
// call will be something like
// app will call sidenav and header
// now sidenav will call MenuItems content
// now MenuItems will call the menuItems and fetch all the items of the submenu
export const menuItems = [
    {
        title : "Dashboard",
        className : "menu_items",
    },
    {
        title : "Home",
        url : "/",
        icons : <i class="fa-solid fa-house"></i>,
        submenu  : [
            {
                title : "home 1",
                url : "/home1",
                icons : <i class="fa-solid fa-house"></i>,
                submenu: [
                    {
                      title: 'NodeJS',
                      url: 'node',
                    },
                    {
                      title: 'PHP',
                      url: 'php',
                    },
                  ],
            },
            {
                title : "home 5",
                url : "/home5",
                icons : <i class="fa-solid fa-house"></i>,
                submenu: [
                    {
                      title: 'NodeJS',
                      url: 'node',
                    },
                    {
                      title: 'PHP',
                      url: 'php',
                    },
                  ],
            },
        ]
    },
    {
        title : "Overview",
        url : "/overview",
        icons : <i class="fa-solid fa-house"></i>,
        submenu  : [
            {
                title : "Overview1",
                url : "/Overview1",
                icons : <i class="fa-solid fa-house"></i>
            },
            {
                title : "Overview2",
                url : "/Overview2",
                icons : <i class="fa-solid fa-house"></i>
            },
        ]
    },
    {
        title : "Editor"
    },
    {
        title : "Staff",
        url : "/staff",
        icons : <i class="fa-solid fa-house"></i>,
        submenu  : [
            {
                title : "Overview1",
                url : "/Overview1",
                icons : <i class="fa-solid fa-house"></i>
            },
            {
                title : "Overview2",
                url : "/Overview2",
                icons : <i class="fa-solid fa-house"></i>
            },
            {
                title : "Overview3",
                url : "/Overview3",
                icons : <i class="fa-solid fa-house"></i>
            },
            {
                title : "Overview4",
                url : "/Overview4",
                icons : <i class="fa-solid fa-house"></i>
            },
            {
                title : "Overview5",
                url : "/Overview5",
                icons : <i class="fa-solid fa-house"></i>
            },
        ]
    },
    {
        title : "Filter",
        url : "/filter",
        icons : <i class="fa-solid fa-house"></i>,
    },
    {
        title : "Upload New",
        url : "/upload",
        icons : <i class="fa-solid fa-house"></i>,
    },
    {
        title : "Setting",
    },
    {
        title : "Notice Board",
        url : "/notice",
        icons : <i class="fa-solid fa-house"></i>,
    },
    {
        title : "Award",
        url : "/award",
        icons : <i class="fa-solid fa-house"></i>,
    },
    {
        title : "Setting",
        url : "/setting",
        icons : <i class="fa-solid fa-house"></i>,
    },
    {
        title : "Features",
        url : "/features",
        icons : <i class="fa-solid fa-house"></i>,
    },
];