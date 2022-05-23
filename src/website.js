import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    //setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");

    const restaurantLogo = document.createElement("div");
    restaurantLogo.textContent = "Akira Sushi";

    header.appendChild(restaurantLogo);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const navList = document.createElement("ul");
    navList.classList.add("nav-list");

    const homeLi = document.createElement("li");
    homeLi.textContent = "Home";
    homeLi.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeLi);
        loadHome();
    });

    const menuLi = document.createElement("li");
    menuLi.textContent = "Menu";
    menuLi.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuLi);
        loadMenu();
    });

    const contactLi = document.createElement("li");
    contactLi.textContent = "Contact";
    contactLi.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactLi);
        loadContacts();
    });

    navList.appendChild(homeLi);
    navList.appendChild(menuLi);
    navList.appendChild(contactLi);
    nav.appendChild(navList);
    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-list > li");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}


function createMain() {
    const main = document.createElement("div");
    main.id = "main";

    return main;
}

function createFooter() {

    const footer = document.createElement("div");
    footer.classList.add("footer");
    const footerParagraph = document.createElement("p");
    footerParagraph.textContent = "Copyright © Dave";

    footer.appendChild(footerParagraph);

    return footer;
}

export default initializeWebsite;