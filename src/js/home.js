import newSvg from './addSvg.js';

const createHero = () => {
    const header = document.createElement("h1");
    header.textContent = "Welcome to Valhalla";

    const subTitle = document.createElement("p");
    subTitle.textContent = "Unwind in the halls of Valhalla with our specially crafted drinks, perfect for celebrating past victories or fueling up for the battles that lie ahead.";

    const subDiv = document.createElement("div");
    subDiv.appendChild(header);
    subDiv.appendChild(subTitle);

    const heroDiv = document.createElement("div");
    heroDiv.classList.add("hero");
    heroDiv.appendChild(subDiv);

    return heroDiv;
}

const createInfoSect = () => {
    // Opening hours
    const hoursHead = document.createElement("h2");
    hoursHead.textContent = "Opening hours";

    const hoursTitle = document.createElement("div");
    hoursTitle.classList.add("title");

    hoursTitle.insertAdjacentHTML('afterbegin', newSvg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" /></svg>'));

    hoursTitle.appendChild(hoursHead);

    const hoursPara = document.createElement("p");
    hoursPara.textContent = "Everyday from sunset to sunrise, including holidays.";

    const hoursDiv = document.createElement("div");
    hoursDiv.appendChild(hoursTitle);
    hoursDiv.appendChild(hoursPara);

    // Weekend Specials
    const weekHead = document.createElement("h2");
    weekHead.textContent = "Weekend Specials";

    const weekTitle = document.createElement("div");
    weekTitle.classList.add("title");

    weekTitle.insertAdjacentHTML('afterbegin', newSvg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z" /></svg>'));

    weekTitle.appendChild(weekHead);

    const weekPara = document.createElement("p");
    weekPara.textContent = "Indulge in our exclusive weekend drink selection every Friday to Sunday.";

    const weekDiv = document.createElement("div");
    weekDiv.appendChild(weekTitle);
    weekDiv.appendChild(weekPara);

    // No coins needed (Price)
    const priceHead = document.createElement("h2");
    priceHead.textContent = "No Coins Needed";

    const priceTitle = document.createElement("div");
    priceTitle.classList.add("title");

    priceTitle.insertAdjacentHTML('afterbegin', newSvg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,4.27L4.28,3L21,19.72L19.73,21L16.06,17.33C15.44,18 14.54,18.55 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15H9C9,16.08 10.37,17 12,17C13.13,17 14.14,16.56 14.65,15.92L11.68,12.95C9.58,12.42 7,11.75 7,9C7,8.77 7,8.55 7.07,8.34L3,4.27M10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C11.63,7 11.28,7.05 10.95,7.13L9.4,5.58L10.5,5.18Z" /></svg>'));

    priceTitle.appendChild(priceHead);

    const pricePara = document.createElement("p");
    pricePara.textContent = "Immerse yourself in the spirit of Valhalla without worrying about coins.";

    const priceDiv = document.createElement("div");
    priceDiv.appendChild(priceTitle);
    priceDiv.appendChild(pricePara);

    // Location
    const locationHead = document.createElement("h2");
    locationHead.textContent = "Location";

    const locationTitle = document.createElement("div");
    locationTitle.classList.add("title");

    locationTitle.insertAdjacentHTML('afterbegin', newSvg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>'));

    locationTitle.appendChild(locationHead);

    const locationPara = document.createElement("p");
    locationPara.textContent = "Asgard - Where the legendary meets the contemporary, your gateway to the extraordinary.";

    const locationDiv = document.createElement("div");
    locationDiv.appendChild(locationTitle);
    locationDiv.appendChild(locationPara);

    // main div
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const infoHeader = document.createElement("h1");
    infoHeader.textContent = "Info";

    infoDiv.appendChild(infoHeader);
    infoDiv.appendChild(hoursDiv);
    infoDiv.appendChild(weekDiv);
    infoDiv.appendChild(priceDiv);
    infoDiv.appendChild(locationDiv);

    return infoDiv;
}

export default function () {
    const div = document.createElement("div");
    div.appendChild(createHero());
    div.appendChild(createInfoSect());

    return div;
}
