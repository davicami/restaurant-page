console.log("Loadingg");

function initializeWebsite() {
    const content = document.getElementById("content");
  
    content.appendChild(createHeader());
    //content.appendChild(createMain());
    //ontent.appendChild(createFooter());
  
    //setActiveButton(document.querySelector(".button-nav"));
    //loadHome();
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

    const menuLi = document.createElement("li");
    menuLi.textContent = "Menu";

    const contactLi = document.createElement("li");
    contactLi.textContent = "Contact";

    navList.appendChild(homeLi);
    navList.appendChild(menuLi);
    navList.appendChild(contactLi);
    nav.appendChild(navList);
    return nav;
  }

  initializeWebsite();