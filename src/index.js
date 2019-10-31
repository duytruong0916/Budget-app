import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter'; 
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {AddExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpense from './selectors/expenses'
const store = configureStore();
store.dispatch(AddExpense({description: "duy truong", amount: 500, createAt: 10}));
store.dispatch(AddExpense({description: "anh truong" , amount: 400, createAt: 20}));
store.dispatch(setTextFilter('truong'))
const state = store.getState();
console.log(getVisibleExpense(state.expense, state.filter));
console.log(store.getState());

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
