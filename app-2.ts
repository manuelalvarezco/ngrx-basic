import { Action } from "./ngrx-fake/ngrx-fake";
import {
  incrementAction,
  decrementAction,
  multiplyAction,
  divideAction,
  resetAction,
} from "./count/count.action";

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return (state += 1);

    case "DECREMENT":
      return (state -= 1);

    case "MULTIPLY":
      return state * action.payload;

    case "DIVIDE":
      return state / action.payload;

    case "RESET":
      return (state = 0);
    default:
      return state;
  }
}

console.log(reducer(10, incrementAction)); // 11
console.log(reducer(10, decrementAction)); // 9
console.log(reducer(10, multiplyAction)); // 20
console.log(reducer(10, divideAction)); // 5
console.log(reducer(10, resetAction)); // 0
