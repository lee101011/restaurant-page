import {removeChildren} from "./utility.js";
export default (parent) => {
    removeChildren(parent);
    const h1 = document.createElement("h1");
    h1.textContent = "Lee's Light Lunches";

    const h2 = document.createElement("h2");
    h2.textContent = "All lunches, all light, all luscious";

    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis cum amet molestiae earum est labore temporibus accusantium vitae iusto modi quae, aliquid ab, commodi nulla tempore magnam vel veritatis!";

    parent.appendChild(h1);
    parent.appendChild(h2);
    parent.appendChild(p);
}