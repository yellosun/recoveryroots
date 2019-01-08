const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db/models')

const app = express()
const PORT = process.env.PORT || 8080
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))


app.get('/api', (req,res)=> {
	res.send('Welcome to the app')
})

// router.get('/users', async (req, res)=> {
// 	let r = await db.User.findAll()
// 	res.json(r)
// })

db.sequelize.sync()
.then(()=> {
	app.listen(PORT, ()=> {
		console.log(`Listening on port:${PORT}`)
	})
})

