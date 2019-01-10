export const SET_TOKEN:string = 'SET_TOKEN'
export const SET_USER:string = 'SET_USER'

interface user {firstName:string, lastName:string, email:string}

export function setToken(t:string) {
    return {
        type: SET_TOKEN,
        payload: { token: t }
    }
}

export function setUser(user:user) {
    return {
        type: SET_USER,
        payload: { user }
    }
}