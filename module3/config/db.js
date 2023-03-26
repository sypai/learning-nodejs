const mongoose = require('mongoose')
const chalk = require('chalk')

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(chalk.green.bold(`MongoDB connected: ${conn.connection.host}`))
}

module.exports = connectDB;