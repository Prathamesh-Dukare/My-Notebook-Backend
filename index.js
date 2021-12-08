const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')

//Create an express app
const app = express()
const host= process.env.BACKEND_HOST
const port = 5000

connectToMongo()

app.use(cors())
app.use(express.json()) //middleware

// Available routes 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`App listening at ${host}:${port}`)
})