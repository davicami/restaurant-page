function createContacts() {
    const contacts = document.createElement("div");
    contacts.classList.add("call-to-action");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Contactus to book a table! Tel: xxx xxxxxx";
    contacts.appendChild(paragraph);

    return contacts;
}

function loadContacts(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContacts());
}

export default loadContacts;