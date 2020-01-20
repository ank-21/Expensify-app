import {createStore, combineReducers} from 'redux';
import expesnseReducers from '../reducers/expenses';
import filtersReducers from '../reducers/filters';

//to export it we will use a default export

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expesnseReducers,
            filters: filtersReducers
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}


//store_creation

// const store = createStore(
//     combineReducers({
//         expenses: expesnseReducers,
//         filters: filtersReducers
//     })
// );