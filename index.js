// import express, { json } from 'express'
// import cors from 'cors'
// import { connect } from 'mongoose'
// import User from './models/user.model'
// import { sign, verify } from 'jsonwebtoken'
// import { hash, compare } from 'bcryptjs'

// const app = express()
// app.use(cors())
// app.use(json())

// connect("mongodb+srv://MyUser:<password>@cluster0.5n0m4.mongodb.net/?retryWrites=true&w=majority")

// app.post('/api/register', async (req, res) => {
// 	console.log(req.body)
// 	try {
// 		const newPassword = await hash(req.body.password, 10)
// 		await User.create({
// 			name: req.body.name,
// 			email: req.body.email,
// 			password: newPassword,
// 		}) 
// 		res.json({ status: 'ok' })
// 	} catch (err) {
// 		res.json({ status: 'error', error: 'Duplicate email' })
// 	}
// })

// app.post('/api/login', async (req, res) => {
// 	const user = await User.findOne({
// 		email: req.body.email,
// 	})

// 	if (!user) {
// 		return { status: 'error', error: 'Invalid login' }
// 	}

// 	const isPasswordValid = await compare(
// 		req.body.password,
// 		user.password
// 	)

// 	if (isPasswordValid) {
// 		const token = sign(
// 			{
// 				name: user.name,
// 				email: user.email,
// 			},
// 			'secret123'
// 		)

// 		return res.json({ status: 'ok', user: token })
// 	} else {
// 		return res.json({ status: 'error', user: false })
// 	}
// })

// app.get('/api/quote', async (req, res) => {
// 	const token = req.headers['x-access-token']

// 	try {
// 		const decoded = verify(token, 'secret123')
// 		const email = decoded.email
// 		const user = await User.findOne({ email: email })

// 		return res.json({ status: 'ok', quote: user.quote })
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ status: 'error', error: 'invalid token' })
// 	}
// })

// app.post('/api/quote', async (req, res) => {
// 	const token = req.headers['x-access-token']

// 	try {
// 		const decoded = verify(token, 'secret123')
// 		const email = decoded.email
// 		await User.updateOne(
// 			{ email: email },
// 			{ $set: { quote: req.body.quote } }
// 		)

// 		return res.json({ status: 'ok' })
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ status: 'error', error: 'invalid token' })
// 	}
// })

// app.listen(1337, () => {
// 	console.log('Server started on 1337')
// })
document.write("Please wait for upcoming developement")
console.log("Hello World!")