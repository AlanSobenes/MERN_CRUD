const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(express.json(), express.urlencoded({extended:true}))
app.use(cors())

require('./config/mongoose.config')

const routesFunction = require('./routes/author.routes')
routesFunction(app)

app.listen(PORT, ()=> console.log(`server up on port: ${PORT}`))