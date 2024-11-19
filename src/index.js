import homeLoad from "./modules/home.js";
import menuLoad from "./modules/menu.js";
import locationLoad from "./modules/location.js";

const content = document.querySelector("#content");
registerButtonListener("#home-nav", () => homeLoad(content));
registerButtonListener("#menu-nav", () => menuLoad(content));
registerButtonListener("#location-nav", () => locationLoad(content));
document.querySelector("#home-nav").click();

function registerButtonListener(buttonID, action) {
    document.querySelector(buttonID).addEventListener("click", (event) => {
        content.replaceChildren();
        action();
    });
}