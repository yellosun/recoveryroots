const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db/models')

const app = express()
const PORT = process.env.PORT || 8080
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

db.sequelize.sync()
.then(()=> {
	app.listen(PORT, ()=> {
		console.log(`Listening on port:${PORT}`)
	})
})


//----------->
// API Routes
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


//----------->
// Home Routes
//----------->

app.get('/', (req,res)=> {
	res.send('Welcome to the rr2 index.html page')
})



