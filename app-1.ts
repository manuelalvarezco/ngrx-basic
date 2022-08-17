// Actions
import { Action } from './ngrx-fake/ngrx-fake';


const incrementAction: Action = {
    type: 'INCREMENT'
}

const decrementAction: Action = {
    type: 'DECREMENT'
}

const multiplyAction: Action = {
    type: 'MULTIPLY',
    payload: 2
}

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
}

function reducer(state = 10, action: Action){

    switch (action.type) {
        case 'INCREMENT':
            return state +=1;
        
        case 'DECREMENT':
            return state -=1;
        
        case 'MULTIPLY':
            return state * action.payload;
        
        case 'DIVIDE':
            return state / action.payload;
        default:
            return state;
    }

    
}

// Use reducer

console.log(reducer(10, incrementAction)); // 11
console.log(reducer(10, decrementAction)); // 9
console.log(reducer(10, multiplyAction)); // 20
console.log(reducer(10, divideAction)); // 5
