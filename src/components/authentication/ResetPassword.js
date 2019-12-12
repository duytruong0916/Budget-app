import React from 'react';
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/auth';
import { NavLink } from 'react-router-dom';
import * as EmailValidator from 'email-validator'

export class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: ''
        }
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.email) {
            this.setState(() => ({ error: 'Please enter an email' }));
        } else if (!EmailValidator.validate(this.state.email)) {
            this.setState(() => ({ error: 'Invalid Email Address' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.resetPassword(this.state.email);
        }
    };
    render() {
        return (
            <div className='login_wrapper'>
                <div className="login_box text-center">
                    <h2 className='font-weight-bold'>Enter your email address:</h2>
                    <form onSubmit={this.onSubmit}>
                        <input
                            className='text-input'
                            id='email'
                            type='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.onEmailChange} />
                        <div className='text-center mt-4 text-danger'>
                            {this.props.resetError && !this.state.error ? <p>{this.props.resetError}</p> : null}
                            {this.state.error && <p>{this.state.error}</p>}
                        </div>
                        <div className='mt-3 mb-3'>
                            <button className='button'>Next</button>
                        </div>

                    </form>
                    <NavLink to='/'>Go Back To LogIn page</NavLink>
                </div>
            </div>
        )
    }
}
const MapStateToProps = (state) => ({
    resetError: state.auth.resetError
})
const MapDispatchToProps = (dispatch) => ({
    resetPassword: (email) => dispatch(resetPassword(email))
});

export default connect(MapStateToProps, MapDispatchToProps)(ResetPasswordPage);