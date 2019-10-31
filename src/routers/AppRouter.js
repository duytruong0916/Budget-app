import React from 'react';
import ExpenseDashBoard from  '../components/ExpenseDashBoard';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../components/Header";
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import PageNotFoundPage from '../components/PageNotFound';
import AddExpensePage from '../components/AddExpensePage';
const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path = "/" component= {ExpenseDashBoard} exact={true} />
        <Route path = "/help" component= {HelpPage}/>
        <Route path = "/create" component= {AddExpensePage}/>
        <Route path = "/dashboard" component= {ExpenseDashBoard } />
        <Route path = "/edit/:id" component= {EditExpensePage}/>
        <Route path = "*" component= {PageNotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
)
export default AppRouter; 