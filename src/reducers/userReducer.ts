import { SET_TOKEN, SET_USER } from '../actions/userAction'

interface action {type:string, payload:any}

const initialState = {
    token: null,
    user: {
        firstName: null,
        lastName: null,
        email: null,
    },
    blogs: []
}

export function userReducer(state = initialState, action:action) {
    switch (action.type) {

    case SET_TOKEN:
        return {
            ...state,
            token: action.payload.token
        }

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
