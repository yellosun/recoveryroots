//----------->
// JWT Routes
//----------->

let jwt: string|null = null

export async function checkToken() {
    const token = localStorage.getItem('app-token')
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

//----------->
// User Routes
//----------->

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

//----------->
// Blog Routes
//----------->

export async function getBlogs(id:number) {
    let r = await fetch(`/api/blogs/user/${id}`, {
        method: 'GET',
        headers: getHeaders(),
    })
    let resp = await r.json()
    return resp
}

export async function createBlog(title:string, body:string, headerImg:string, uri:string, category:string, description:string, render:boolean, userId:number) {
    console.log('createBlog START')
    let r = await fetch('/api/blogs/create', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            title: title,
            body: body,
            headerImg: headerImg,
            uri: uri,
            category: category,
            description: description,
            render: render,
            userId: userId
        })
    })
    console.log('createBlog END')

    let resp = await r.json()
    return resp
}

//----------->
// MISC Routes
//----------->

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