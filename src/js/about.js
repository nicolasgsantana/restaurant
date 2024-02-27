export default function () {
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");

    const subDiv = document.createElement("div");
    aboutDiv.appendChild(subDiv);

    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    subDiv.appendChild(textDiv);

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = "About";
    textDiv.appendChild(mainHeader);

    const subHeader1 = document.createElement("h2");
    subHeader1.textContent = "Unveiling the Legends of Valhalla";
    textDiv.appendChild(subHeader1);

    const para1 = document.createElement("p");
    para1.textContent = "Welcome to Valhalla, a sanctuary where the echoes of Norse mythology come to life, and the spirit of adventure intertwines with the taste of legend."
    textDiv.appendChild(para1);

    const subHeader2 = document.createElement("h2");
    subHeader2.textContent = "Our Story";
    textDiv.appendChild(subHeader2);

    const para2 = document.createElement("p");
    para2.textContent = "In the heart of Asgard, Valhalla rises as a haven for those seeking more than just a drink - it's a gateway to the realms of gods and warriors. Inspired by the sagas of old, our founders envisioned a place where the rich tapestry of Norse lore would blend seamlessly with the modern-day revelry."
    textDiv.appendChild(para2);

    const subHeader3 = document.createElement("h2");
    subHeader3.textContent = "The Experience";
    textDiv.appendChild(subHeader3);

    const para3 = document.createElement("p");
    para3.textContent = "Step through the towering doors of Valhalla and immerse yourself in an ambiance that echoes the feasts of Asgard. From the flickering light of the hearth to the resounding echoes of laughter, every detail is meticulously crafted to transport you to a mythical world."
    textDiv.appendChild(para3);

    const subHeader4 = document.createElement("h2");
    subHeader4.textContent = "The Drinks";
    textDiv.appendChild(subHeader4);

    const para4 = document.createElement("p");
    para4.textContent = "Our menu is a chronicle of flavors, each drink a homage to the gods and the brave souls who once graced the halls of Valhalla. Whether you're sipping on the honeyed Mead of the Gods or relishing the Valkyrie's Elixir, each libation is a celebration of Norse spirit."
    textDiv.appendChild(para4);

    const subHeader5 = document.createElement("h2");
    subHeader5.textContent = "Community and Fellowship";
    textDiv.appendChild(subHeader5);

    const para5 = document.createElement("p");
    para5.textContent = "At Valhalla, we believe in forging connections and building a community as strong as the bonds in the halls of Valhalla itself. Join us for a night of camaraderie, where stories are shared, and new legends are born."
    textDiv.appendChild(para5);

    const subHeader6 = document.createElement("h2");
    subHeader6.textContent = "Visit Us";
    textDiv.appendChild(subHeader6);

    const para6 = document.createElement("p");
    para6.textContent = "Located in Asgard, Valhalla invites you to embark on a journey through myth and merriment. Come raise your horn, toast to glory, and experience the magic that is Valhalla."
    textDiv.appendChild(para6);

    const para7 = document.createElement("p");
    para7.textContent = "Skål to new beginnings and timeless tales!"
    textDiv.appendChild(para7);

    return aboutDiv;
}
