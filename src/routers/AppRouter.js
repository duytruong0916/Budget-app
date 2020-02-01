import React from 'react';
import {Router,Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/loginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SignUpPage  from '../components/authentication/SignUpPage';
import ResetPasswordPage from '../components/authentication/ResetPassword';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PublicHeader from '../components/PublicHeader';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/signup' component ={ SignUpPage} />
        <PublicRoute path='/resetpassword' component ={ ResetPasswordPage} />
        <PublicRoute path='/' component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
