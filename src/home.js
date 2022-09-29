
function createHome() {
    const home = document.createElement("div");
    home.classList.add("hero");

    const heroLeft = document.createElement("div");
    heroLeft.classList.add("hero-left");
    const heroMainText = document.createElement("h1");
    heroMainText.textContent = "Awsome sushi restaurant";
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

export default loadHome;
