import {SIGN_IN, SIGN_OUT} from '../constants/actionType';

export function signIn(payload){
    return {
        type: SIGN_IN,
        payload
    }
}

export function signOut(payload){
    return{
        type: SIGN_OUT, 
    }
}