import {removeChildren} from "./utility.js";
export default (parent) => {
    removeChildren(parent);

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";

    const h2 = document.createElement("h2");
    h2.textContent = "Light Up Your Lunch With This Lineup";

    const ul = document.createElement("ul");
    
    const li_blt = document.createElement("li");
    li_blt.textContent = "BLT - The classic. Bacon, lettuce and tomato (pronounced however you want)";
    
    const li_veg = document.createElement("li");
    li_veg.textContent = "Sliced Veggie Wraps (aka. Veggie Sushi) - All your favourite veggies wrapped in a soft tortilla. Served sliced to ressemble sushi."
            
    const li_hip = document.createElement("li");
    li_hip.textContent = "The Hipster's Special - Avocado toast. Served on a bread type you've never heard of before."

    ul.appendChild(li_blt);
    ul.appendChild(li_veg);
    ul.appendChild(li_hip);

    parent.appendChild(h1);
    parent.appendChild(h2);
    parent.appendChild(ul);
}