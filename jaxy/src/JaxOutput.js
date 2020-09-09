import { store } from "./store.js";
import { html, render } from "./lit-html.js";

class JaxOutput extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({mode:"open"});
    }

    connectedCallback() { 
        store.subscribe(_ => this.update());        
    }

    update() { 
        const message = store.getState();
        const template = html`
        <style>
            h2 {
                background-color: pink;
            }
        </style>
            <h2>${message}</h2>
        `;
        render(template, this.root);
    }

}

customElements.define('jax-output',JaxOutput);