import React from 'react';
import ReactDOM from 'react-dom';
import './style/styles.scss';
import 'normalize.css/normalize.css';
import * as serviceWorker from './serviceWorker';
import AppRouter, {history} from './routers/AppRouter'; 
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {logIn, logOut} from './actions/auth';
import {firebase} from './firebase/firebase';
import {startSetExpenses} from './actions/expenses';
const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false; 
const renderApp =() =>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}
ReactDOM.render(<p>loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(logIn(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname==='/')
            {
                history.push('/dashboard')
            }
        })
    }else{
        store.dispatch(logOut());
        renderApp();
        history.push('/');
    }
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
