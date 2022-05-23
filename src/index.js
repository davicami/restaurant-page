console.log("Loadingg");

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

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

function createMain() {
    const main = document.createElement("div");
    main.classList.add("main");

    // temporarily here
    const home = createHome();
    main.appendChild(home);

    return main;
}

function createHome() {
    const home = document.createElement("div");
    home.classList.add("hero");

    const heroLeft = document.createElement("div");
    heroLeft.classList.add("hero-left");
    const heroMainText = document.createElement("h1");
    heroMainText.textContent = "Awsome sushi";
    const heroParagraph = document.createElement("p");
    heroParagraph.textContent = "We offer the best sushi in a wonderful location.  Our chef will surprise you with delicious and creative recipes.";
    heroLeft.appendChild(heroMainText);
    heroLeft.appendChild(heroParagraph);
    
    const heroRight = document.createElement("div");
    heroRight.classList.add("hero-right");
    const chefImage = document.createElement("img");
    chefImage.id = "sushi-chef-image";
    chefImage.src = "pexels-ivan-samkov-8951245.jpg";
    chefImage.alt = "Chef";
    heroRight.appendChild(chefImage);
    const caption = document.createElement("p");
    caption.classList.add("caption");
    caption.textContent = "Photo by Ivan Samkov from Pexels";
    heroRight.appendChild(caption);

    home.appendChild(heroLeft);
    home.appendChild(heroRight);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

function createFooter(){
    /*
    <div class="footer">
        <p>Copyright © Dave </p>
    </div>
    */
   const footer = document.createElement("div");
   footer.classList.add("footer");

   const footerParagraph = document.createElement("p");
   footerParagraph.textContent = "Copyright © Dave";

   footer.appendChild(footerParagraph);

   return footer;
}


initializeWebsite();