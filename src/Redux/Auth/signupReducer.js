import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "./actionType"

const initalState = {
     isAuth: false,
     token: null,
     successMessage: "",
     errorMessage: "",
     loading: false,
     uid: null,
     userData: null
}

export const signupReducer = (state = initalState, { type, payload }) => {
     switch (type) {

          case SIGN_UP_REQUEST:
               return {
                    ...state,
                    loading: true
               }
          case SIGN_UP_SUCCESS:
               return {
                    ...state,
                    isAuth: true,
                    successMessage: "Sign up Successfull!",
                    token: payload,
                    loading: false
               }
          case SIGN_UP_FAILURE:
               return {
                    ...state,
                    loading: false,
                    errorMessage: payload
               }

          default:
               return initalState
     }
}
