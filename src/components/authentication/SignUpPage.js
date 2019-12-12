import React from 'react';
import SignUpForm from './SignUpForm'
import { NavLink } from 'react-router-dom';
export default class SignUpPage extends React.Component {
  render() {
    return (
      <div className='login_wrapper'>
        <div className="login_box">
          {this.props.signupError && <p className='text-center mt-4 text-danger font-weight-bold'>{this.props.signupError}</p>}
          <h1 className='login_title text-center font-weight-bold'>Register</h1>
          <SignUpForm onSubmit={this.onSubmit} />

          <NavLink to='/'>Go Back To LogIn page</NavLink>
        </div>
      </div>
    )
  }

}
