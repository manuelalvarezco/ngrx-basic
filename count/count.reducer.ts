import { Action } from '../ngrx-fake/ngrx-fake';

export function countReducer(state = 10, action: Action) {
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