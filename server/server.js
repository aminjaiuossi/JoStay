import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js'
import  clerkWebhooks  from './controller/clerkWebhooks.js'
import { clerkMiddleware } from '@clerk/express'


//initialize express
const app = express()
//connect to database
await connectDB()


//middlewares
app.use(cors())
app.use(clerkMiddleware())

//routes
app.get('/', (req, res)=> res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)

//port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
