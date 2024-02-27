import bgImg from '../img/bg/menu.jpg';
import meadOfGods from '../img/drinks/mead-of-the-gods.jpg';
import valkyrieElixir from '../img/drinks/valkyrie-elixir.jpg';
import thorHammer from '../img/drinks/thor-hammer.jpg';
import odinWisdom from '../img/drinks/odin-whiskey.jpg';
import frostbite from '../img/drinks/frostbite.jpg';
import bifrost from '../img/drinks/bifrost-bliss.jpg';
import midsummer from '../img/drinks/midsummer-dream.jpg';
import sif from '../img/drinks/sif-surprise.jpg';
import loki from '../img/drinks/loki-libation.jpg';

const createHero = () => {
    const header = document.createElement("h1");
    header.textContent = "Menu";

    const subTitle = document.createElement("p");
    subTitle.textContent = "In the heart of Asgard, Valhalla beckons. Our menu is a saga of flavors, each drink a chapter in the epic tale of gods and warriors. Skål to a night of legendary indulgence!";

    const subDiv = document.createElement("div");
    subDiv.appendChild(header);
    subDiv.appendChild(subTitle);

    const heroDiv = document.createElement("div");
    heroDiv.classList.add("hero");
    heroDiv.style.background = `url(${bgImg}) no-repeat center center fixed`;
    heroDiv.style.backgroundSize = "cover";
    heroDiv.appendChild(subDiv);

    return heroDiv;
}

const createMenu = () => {
    const drinkInfo = [
        {
            imgSrc: meadOfGods,
            title: "Mead of the Gods",
            description: "A classic honey mead, symbolizing the nectar of the gods and a staple for warriors in Valhalla."
        },
        {
            imgSrc: valkyrieElixir,
            title: "Valkyrie's Elixir",
            description: "A sophisticated cocktail featuring vodka, elderflower liqueur, and a splash of sparkling mead, honoring the powerful Valkyries."
        },
        {
            imgSrc: thorHammer,
            title: "Thor's Hammer Brew",
            description: "A robust beer with a hint of smokiness, paying homage to the mighty Thor and his legendary hammer."
        },
        {
            imgSrc: odinWisdom,
            title: "Odin's Wisdom Whiskey",
            description: "A rich and bold whiskey blend, representing the wisdom of Odin, the Allfather."
        },
        {
            imgSrc: frostbite,
            title: "Frost Giant Frostbite",
            description: "A chilled vodka cocktail infused with mint and blue curaçao, inspired by the frost giants of Norse mythology."
        },
        {
            imgSrc: bifrost,
            title: "Bifrost Blueberry Bliss",
            description: "A refreshing blueberry-infused mocktail, named after the mythical rainbow bridge that connects Asgard to the mortal realm."
        }
    ];

    const specialDrinkInfo = [
        {
            imgSrc: midsummer,
            title: "Midsummer Night's Dream",
            description: "A floral gin and tonic with a touch of lavender and citrus, capturing the enchantment of a midsummer night in Asgard."
        },
        {
            imgSrc: sif,
            title: "Sif's Strawberry Surprise",
            description: "A delightful strawberry and prosecco concoction, celebrating the goddess Sif and her association with fertility."
        },
        {
            imgSrc: loki,
            title: "Loki's Libation",
            description: "A mischievous blend of rum, pineapple, and a hint of chili, inspired by the trickster god Loki."
        },
    ]

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const mainHeader1 = document.createElement("h1");
    mainHeader1.textContent = "Drinks";
    menuDiv.appendChild(mainHeader1);

    // Create drink div
    for (let i = 0; i < drinkInfo.length; i++) {
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = drinkInfo[i].imgSrc;
        div.appendChild(img);

        const title = document.createElement("h2");
        title.textContent = drinkInfo[i].title;
        div.appendChild(title);

        const desc = document.createElement("p");
        desc.textContent = drinkInfo[i].description;
        div.appendChild(desc);

        menuDiv.appendChild(div);
    }

    const mainHeader2 = document.createElement("h1");
    mainHeader2.textContent = "Weekend Specials";
    menuDiv.appendChild(mainHeader2);

    for (let i = 0; i < specialDrinkInfo.length; i++) {
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = specialDrinkInfo[i].imgSrc;
        div.appendChild(img);

        const title = document.createElement("h2");
        title.textContent = specialDrinkInfo[i].title;
        div.appendChild(title);

        const desc = document.createElement("p");
        desc.textContent = specialDrinkInfo[i].description;
        div.appendChild(desc);

        menuDiv.appendChild(div);
    }

    return menuDiv;
}

export default function () {
    const div = document.createElement("div");
    div.appendChild(createHero());
    div.appendChild(createMenu());
    return div;
}
