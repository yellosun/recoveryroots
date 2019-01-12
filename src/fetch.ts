let jwt: string|null = null

export async function checkToken() {
    const token = localStorage.getItem('app-token')
    console.log(token)
    try {
        const r = await fetch('/checktoken', {
            method: 'GET',
            headers: getHeaders(),
        })
        const user = await r.json()
        jwt = token
        return user

    } catch (err) {
        return null
    }
}

export function setJWT(token: string|null) {
    jwt = token
    if (!jwt) {
        window.localStorage.removeItem('app-token')
    } else {
        window.localStorage.setItem('app-token', jwt)
    }
}

export async function getUsers() {
	let r = await fetch('/api/users', {
        method: 'GET',
        headers: getHeaders(),
    })

    let resp = await r.json()
    return resp
}

export async function login(email: string, password: string) {
    let r = await fetch('/api/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            email: email, 
            password: password,
        })
    })

    if (!r.ok) {
        let data = await r.json()
        console.log(data)        
        throw new Error(data.error)
    }

    let data = await r.json()
    
    setJWT(data.token)
    return data.user
}


function getHeaders(): any {
    const token = localStorage.getItem('app-token')
    if (token) {
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    } else {
        return {
            "Content-Type": "application/json",
        }
    }
}