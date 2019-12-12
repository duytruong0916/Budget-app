import { firebase, googleAuthProvider } from '../firebase/firebase';
//Sign up for an account
export const startSignUpWithEmail = (new_user = {}) => {
  return (dispatch) => {
    return firebase.auth().createUserWithEmailAndPassword(new_user.email, new_user.password)
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' })
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      });
  }
}
export const logIn = (uid) => ({
  type: 'LOGIN_SUCCESS',
  uid
})
//Log In with google account
export const startLoginWithGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};
//Log in with email and password
export const startLoginWithEmail = (credentials) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });

  }
}
//Log Out
export const logOut = () => ({
  type: 'SIGNOUT_SUCCESS'
})
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
//Reset Password
export const resetPassword =(Email)=>{
  return (dispatch)=>{
    return firebase.auth().sendPasswordResetEmail(Email).then(()=> {
      alert('An email was sent to yout Email address to reset your password. Please check your email...');
      dispatch({type: 'RESET_SUCCESS'})
    }).catch((error)=>{
      dispatch({ type: 'RESET_ERROR', error})
    })
  }
}