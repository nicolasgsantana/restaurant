const createHero = () => {
    const header = document.createElement("h1");
    header.textContent = "Welcome to Valhalla";

    const subTitle = document.createElement("p");
    header.textContent = "Unwind in the halls of Valhalla with our specially crafted drinks, perfect for celebrating past victories or fueling up for the battles that lie ahead.";

    const subDiv = document.createElement("div");
    subDiv.appendChild(header);
    subDiv.appendChild(subTitle);

    const heroDiv = document.createElement("div");
    heroDiv.classList.add("hero");
    heroDiv.appendChild(subDiv);

    return heroDiv;
}

const createInfoSect = () => {
    const hoursHeader = document.createElement("h2");
    hoursHeader
}
