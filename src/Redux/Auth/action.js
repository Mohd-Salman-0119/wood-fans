
import { FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from './actionType'
import axios from 'axios'
import { BASE_URI } from '../api'

// Login Action Methods
const loginRequest = () => {
     return { type: LOGIN_REQUEST }

}
const loginSuccess = (payload) => {
     return { type: LOGIN_SUCCESS, payload }
}
const loginFailure = (payload) => {
     return { type: LOGIN_FAILURE, payload }
}

// SignUp Action Methods
const signUpRequest = () => {
     return { type: SIGN_UP_REQUEST }

}
const signUpSuccess = (payload) => {
     return { type: SIGN_UP_SUCCESS, payload }
}
const signUpFailure = (payload) => {
     return { type: SIGN_UP_FAILURE, payload }
}

// Methods that tolk to Firebase

// login with email and password 
const loginWithEmailAndPassword = (email, password, onSuccess) => async (dispatch) => {
     try {
          dispatch(loginRequest())
          const { data } = await axios.post(`${BASE_URI}/login`, { email, password })
          console.log(data)
          // localStorage.setItem('userToken', data.token)
          dispatch(loginSuccess(data.token))
          onSuccess()
     } catch (error) {
          let errorMessage = "Login failed. Please check your credentials and try again.";
          dispatch(loginFailure(errorMessage))
     }
}




// SignUp new user 
const signUpNewUser = (email, password, name, onSuccess) => async (dispatch) => {
     try {

          dispatch(signUpRequest());
          const { data } = await axios.post(`${BASE_URI}/signup`, { name, email, password })
          console.log(data)
          onSuccess()
          dispatch(signUpSuccess(data.token));
     } catch (error) {
          let errorMessage = "Sign-up failed. Please check your information and try again";
          if (error.code === "auth/email-already-in-use") {
               errorMessage = "The email address is already in use by another account. Please use a different email";
          }
          dispatch(signUpFailure(errorMessage));
     }
}

// Forgot Password


// Set user data.



// Export functions
export {
     loginWithEmailAndPassword,
     signUpNewUser
}