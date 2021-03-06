import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.css';

const store = configureStore();

console.log('test');

// store.dispatch(addExpense({description: 'Water Bill', amount:4500, createdAt:0 }));
// store.dispatch(addExpense({description: 'Gas Bill', amount:0, createdAt:1000 }));
// store.dispatch(addExpense({description: 'Rent', amount:19500 }));

// store.dispatch(setTextFilter('water'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store= {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
