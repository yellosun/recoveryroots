require('dotenv/config')

console.log('ENV ENV ENV', process.env)

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

export async function getBlogs() {
    let r = await fetch('/api/blogs', {
        method: 'GET',
        headers: getHeaders(),
    })
    let resp = await r.json()
    return resp
}

export async function getUserBlogs(id:number) {
    let r = await fetch(`/api/blogs/user/${id}`, {
        method: 'GET',
        headers: getHeaders(),
    })
    let resp = await r.json()
    return resp
}

export async function getBlog(id:number|null) {
    let r = await fetch(`/api/blogs/${id}`, {
        method: 'GET',
        headers: getHeaders(),
    })
    let resp = await r.json()
    return resp
}

export async function patchBlog(id:number,title:string, body:string, headerImg:string, uri:string, category:string, description:string, render:boolean) {
    let r = await fetch(`/api/blogs/${id}`, {
        method: 'PATCH',
        headers: getHeaders(),
         body: JSON.stringify({
            title: title,
            body: body,
            headerImg: headerImg,
            uri: uri,
            category: category,
            description: description,
            render: render,
        })
    })
    let b = await getBlog(id) 
    return b
}

export async function destroyBlog(id:number|null) {
    let r = await fetch(`/api/blogs/delete/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
    })
    let resp = await r.json()
    return resp
}

export async function createBlog(title:string, body:string, headerImg:string, uri:string, category:string, description:string, render:boolean, userId:number) {
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

export async function getInsta() {
    let r = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTA_TOKEN}`)
    let instaObj = await r.json()
    
    return instaObj.data
}

export async function mailSignup(email:string, FNAME:string, LNAME:string) {
    let r = await fetch(`https://us18.api.mailchimp.com/3.0/${process.env.REACT_APP_MEMBER_LIST}/lists`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Data ${process.env.REACT_APP_MAILCHIMP_API_KEY}`
        },
        body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
            merge_fields: { FNAME, LNAME }
        })
    } )

    let mailchimp = await r.json()
    
    return mailchimp
}