import reducer from "./reducer";
import {
    signUpSuccess,
    signInSuccess,
    signInFaliure,
    signUpFaliure,
    signInRequest,
    signUpRequest,
    signOutSuccess,
} from "./actionsPrivate";

describe ('auth reducer', ()=>{
    const initState = {
        isLoggedIn:false,
        token:null,
        email:null,
        error:null,
    }
    const loginState = {
            isLoggedIn:true,
            token:"recYfMUPIF60jWCmp",
            email:"test@df",
            error:null,
        }
    const errorState = {
            isLoggedIn:false,
            token:null,
            email:null,
            error:"testError",
        }

    it('signIn', () => {
        expect(reducer(loginState, signUpSuccess.toString())).toEqual(loginState)
    })
    it('signOut', () => {
        expect(reducer(initState, signUpSuccess.toString())).toEqual(initState)
    })
}
)