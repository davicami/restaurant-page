function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("information");

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("information-header");
    menuTitle.textContent = "Menu";

    // list of dishes 
    const menuList = document.createElement("div");
    menuList.classList.add("information-list");

    menuList.appendChild(createMenuItem("Nigiri", "pexels-ryutaro-tsukata-6249497.jpg"));
    menuList.appendChild(createMenuItem("Futomaki", "pexels-pixabay-357756-maki.jpg"));
    menuList.appendChild(createMenuItem("Uramaki", "pexels-önder-örtel-7248797.jpg"));
    menuList.appendChild(createMenuItem("Temaki", "pexels-temaki-12032535.jpg"));
    menuList.appendChild(createMenuItem("Tempura", "pexels-tempura-3622477.jpg"));
    menuList.appendChild(createMenuItem("Yaki Soba", "pexels-yaki-soba-4518700.jpg"));
    menuList.appendChild(createMenuItem("Mochi", "pexels-mochi-8963453.jpg"));

    menu.appendChild(menuTitle);
    menu.appendChild(menuList);

    return menu;
}

function createMenuItem(name, image) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("information-item");
    const informationBox = document.createElement("div");
    informationBox.classList.add("information-box");
    const itemImage = document.createElement("img");
    itemImage.classList.add("menu-image");
    itemImage.src = image;
    const itemName = document.createElement("div");
    itemName.textContent = name;

    informationBox.appendChild(itemImage);
    menuItem.appendChild(informationBox);
    menuItem.appendChild(itemName);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;