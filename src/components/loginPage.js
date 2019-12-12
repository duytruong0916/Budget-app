import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle} from '../actions/auth';
import { NavLink} from 'react-router-dom'
import EmailPasswordPage from '../components/authentication/EmailPassword'

export class LoginPage extends React.Component{
  render(){
    return(
      <div className='login_wrapper'>
        <div className="login_box">
          <h1 className='login_title text-center font-weight-bold'>Expensify App</h1>
          <div className='text-center'>It's time to get your expenses under control</div>
          <EmailPasswordPage />
          <button onClick={this.props.startLogin} className='button w-100 mt-4'>Login with Google</button>
          <div className='text-center mt-4'><NavLink to="/signup" activeClassName="is-active">CREATE AN ACCOUNT</NavLink></div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLoginWithGoogle()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
