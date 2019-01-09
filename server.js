require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db/models')
const jwt = require('jsonwebtoken')

const passport = require('passport')
require('./config/passport')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(passport.initialize())
app.use(passport.session())

db.sequelize.sync()
.then(()=> {
	app.listen(PORT, ()=> {
		console.log(`Listening on port:${PORT}`)
	})
})


//----------->
// Home Routes
//----------->

app.get('/api', (req,res)=> {
	res.send('Welcome to the rr2 API')
})

app.get('/api/users', async (req, res)=> {
	let r = await db.User.findAll()
	res.json(r)
})

app.get('/api/blogs', async (req, res)=> {
	let r = await db.Blog.findAll()
	res.json(r)
})

app.get('/api/blogs/:id', async (req, res)=> {
	let r = await db.Blog.findAll({where: {id: req.params.id}})
	res.json(r)
})

app.get('/api/users/:id', async (req, res)=> {
	let r = await db.User.findAll({where: {id: req.params.id}})
	res.json(r)
})

app.post('/api/signup', (req,res)=> {
	console.log(req.body)
	db.User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
	}).then(()=> {
		res.redirect('/')
	}).catch(err=> {
		console.log(err)
		res.json(err)
	})
})

app.post("/api/login", async function(req, res, next) {
	console.log(req.body)

    const { user, info } = await passportAuthenticateAsync('local', req, res, next)
    if (!user) {
        throw new HTTPError(403, 'Username or password is invalid')
    }
    const { token } = await reqLoginAsync(req, user)

    return res.status(200).json({ token, user })
})

function passportAuthenticateAsync(strategy, req, res, next) {
    return new Promise((resolve, reject) => {
        passport.authenticate(strategy, {session: false}, (err, user, info) => {
            if (err) return reject(err)
            return resolve({ user, info })
        })(req, res, next)
    })
}

function reqLoginAsync(req, user) {
    return new Promise((resolve, reject) => {
        req.login(user, {session: false}, err => {
            if (err) return reject(err)
            const token = jwt.sign({ userID: user.userID }, process.env.JWT_SECRET)

            return resolve({ token })
        })
    })
}


//----------->
// Home Routes
//----------->

app.get('/', (req,res)=> {
	res.send('Welcome to the rr2 index.html page')
})



