export const SET_USER:string = 'SET_USER'

interface user {
	firstName:string,
	lastName:string,
	email:string
}

export function setUser(user:user) {
    return {
        type: SET_USER,
        payload: { user }
    }
}