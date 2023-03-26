const mongoose = require('mongoose');

const connectDB = require('../config/db')

// Connect to our MongoDB 
connectDB()

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model('Task', {
    desc: {
        type: String
    },
    status: {
        // True -> Completed
        // false -> Pending
        type: Boolean
    }
})

const u0 = new User({
    name: 'Suyash',
    age: 26
})

u0.save().then( (result) => {
    console.log(result)
}).catch( (error) => {
    console.log(error)
})

const t1 = new Task({
    desc: 'Complete v1 of your resume',
    status: false
})

t1.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})