import { html, render } from "./lit-html.js";
import { store, ADD, RESET } from './store.js';

class JaxMessage extends HTMLElement { 

    connectedCallback() { 
        const message = "hello, schloss" + this.getAttribute('message');
        const template = html`
            <h1>${message}</h1>
            <button @click="${_=>this.sendMessage()}">message</button>
            <button @click="${_=>this.delete()}">delete</button>
        `;
        render(template,this);
    }

    sendMessage() { 
        console.log("click " + new Date());
        store.dispatch({
            type: ADD,
            payload: "hey duke " + new Date()
        });
    }

    delete() { 
        store.dispatch({
            type: RESET
        });

    }

}

customElements.define('jax-message',JaxMessage);