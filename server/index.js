const  express = require('express')
const cors = require('cors')
const {register, login} = require('./controllers/auth.js')
const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/createUser', register)
app.post('/api/authenticate', login)

app.listen(4004, () => console.log('party time in port 4004'))