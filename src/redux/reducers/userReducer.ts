import { SET_USER } from '../actions/userAction'

interface action {type:string, payload?:any}

const initialState = {
    user: {
        firstName: null,
        lastName: null,
        email: null,
    }
}

export function userReducer(state:any = initialState, action:action) {
    switch (action.type) {

    case SET_USER:
        const { user } = action.payload
        return {
            ...state,
            user: {
                ...state.user,
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }
        }
        
    default:
    	return state
    } 
}
