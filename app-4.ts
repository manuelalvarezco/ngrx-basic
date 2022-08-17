import { legacy_createStore, Store } from "redux";
import { countReducer } from './count/count.reducer';
import { incrementAction } from './count/count.action';

const store: Store = legacy_createStore(countReducer);

store.subscribe(()=> {
    console.log('subs', store.getState());
})

store.dispatch(incrementAction);