const initState = {
  uid: undefined,
  authError: null,
  resetError: null
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'INVALID EMAIL/PASSOWORD'
      }

    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        uid: action.uid,
        authError: null
      }

    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return {};

    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      }

    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }
    case 'RESET_SUCCESS':
      console.log('An email was sent to your email to reset the password')
      return {
        ...state,
        resetError: null
      }
    case 'RESET_ERROR':
      console.log('Email is not in the system')
      return {
        ...state,
        resetError: 'Email is not in the system'
      }
    default:
      return state
  }
};

