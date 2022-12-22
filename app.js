// external imports
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRoute = require('./routes/loginRoutes')
const usersRoute = require('./routes/usersRoute')
const inboxRoute = require('./routes/inboxRoute')

// internal imports
const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler')

const app = express();
dotenv.config();


// Database connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING)
.then(() => console.log("Database Connected Successfully!!!"))
.catch(error => console.log(error))

// handle request
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// set view engine
app.set("view engine", "ejs")

// set static folder
app.use(express.static(path.join(__dirname, "public")))

// cookie parser
app.use(cookieParser(process.env.COOKIE_PARSER))

// handle routing
app.use('/', loginRoute)
app.use('/users', usersRoute)
app.use('/inbox', inboxRoute)

// 404 not found handler
app.use(notFoundHandler)

// default error handler
app.use(errorHandler)

// port listen

app.listen(process.env.PORT, () => {
    console.log(`Listening to the port ${process.env.PORT}`);
})