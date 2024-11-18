import {removeChildren} from "./utility.js";
export default (parent) => {
    removeChildren(parent);

    const h1 = document.createElement("h1");
    h1.textContent = "Where Are We?";

    const h2 = document.createElement("h2");
    h2.textContent = "We're always at the cool corner";

    const p = document.createElement("p");
    p.textContent = "123 Main St.\r\nSmall Town, Slightly Larger Province.\nFind us at the intersection of Main St. and Cool Dr. Be there, or be square.";

    const h2a = document.createElement("h2");
    h2a.textContent = "We're always at the cool corner";

    const pa = document.createElement("p");
    pa.textContent = "123 Main St.<br/>Small Town, Slightly Larger Province.<br/>Find us at the intersection of Main St. and Cool Dr. Be there, or be square.";

    parent.appendChild(h1);
    parent.appendChild(h2);
    parent.appendChild(p);
    parent.appendChild(h2a);
    parent.appendChild(pa);
}