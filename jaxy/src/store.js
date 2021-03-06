import { createStore } from './redux.js';

export const ADD = 'ADD';
export const RESET = 'RESET';

const messages = (state = 'no message', action) => { 
    
    const { type, payload = '' } = action;

    switch (type) {
        
        case ADD:
            return state + payload;

        case RESET:
            return '';

    }

    return state;

}

export const store = createStore(messages,'',window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



