import {removeChildren} from "./utility.js";
export default (parent) => {
    removeChildren(parent);

    const h1 = document.createElement("h1");
    h1.textContent = "Where Are We?";

    const h2 = document.createElement("h2");
    h2.textContent = "We're always at the cool corner";

    const p = document.createElement("div");
    const addr = document.createElement("div");
    const addr2 = document.createElement("div");
    const addr3 = document.createElement("div");
    addr.textContent = "123 Main St."
    addr2.textContent = "Small Town, Slightly Larger Province."
    addr3.textContent = "Find us at the intersection of Main St. and Cool Dr. Be there, or be square.";

    p.appendChild(addr);
    p.appendChild(addr2);
    p.appendChild(addr3);

    const h2a = document.createElement("h2");
    h2a.textContent = "We're always at the cool corner";

    const pa = document.createElement("p");
    pa.textContent = "10 - 2 every day except holidays.";

    parent.appendChild(h1);
    parent.appendChild(h2);
    parent.appendChild(p);
    parent.appendChild(h2a);
    parent.appendChild(pa);
}