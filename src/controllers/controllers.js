import mongoose from 'mongoose'
import { SignUpSchema } from '../models/model'

const SignUp = mongoose.model('SignUp', SignUpSchema)

export const signUp = (req, res) => {
    let newUser = new SignUp(req.body)
    var findUserById = SignUp.find({ email: newUser.email });

    findUserById.then(function (users) {
        console.log(`Request users.length: ${users.length}`)
        if (users.length == 0) {
            newUser.save((err, user) => {
                console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
                if (err) {
                    res.send(err)
                }
                res.json({ statusCode: 200, user })
            })
        } else {
            res.json({ statusCode: 201, error: "Email already in use" })
        }
    })
}

export const login = (req, res) => {
    var findUserById = SignUp.find({ email: req.body.email });
    findUserById.then(function (users) {
        console.log(`Request users.length: ${users.length}`)
        if (users.length == 1) {
            let user = users[0]
            if (user.password == req.body.password) {
                res.json({ statusCode: 200, user })
            } else {
                res.json({ statusCode: 201, error: "Invalid credentials" })
            }
        } else {
            res.json({ statusCode: 202, error: "Email Id does not exist, Please proceed to signUp" })
        }
    })
}