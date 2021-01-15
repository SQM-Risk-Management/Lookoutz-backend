import express from 'express'
import routes from './src/routes/route'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 4001

/* Mongoose connection */
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/patientDB1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

/* Body parser setup */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.get('/', (req, res) =>
    res.send(`Node and server running on port ${PORT}`)
)

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`)
    console.log("User SignUp [POST]: http://localhost:4001/SignUp");
    console.log("User Login [POST]: http://localhost:4001/Login");
})