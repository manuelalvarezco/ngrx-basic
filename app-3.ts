import { countReducer } from './count/count.reducer';
import { Reducer, Action } from './ngrx-fake/ngrx-fake';
import { incrementAction, multiplyAction } from './count/count.action';


class Store<T> {
    //private state: I;
    constructor(private reducer: Reducer<T>,
        private state: T){}

    getState(){
        return this.state;
    }

    dispatch(action: Action){
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store( countReducer, 10 );

console.log(store.getState());

store.dispatch(incrementAction);
store.dispatch(incrementAction);

console.log(store.getState());

store.dispatch(multiplyAction);
console.log(store.getState());