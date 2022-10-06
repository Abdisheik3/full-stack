
require('dotenv').config() 
const morgan = require('morgan') 
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')


const middleware = (app) => {
    app.use(morgan('tiny')) 
    app.use(express.urlencoded({ extended: true })) 
    app.use(express.static('public')) 
    app.use(express.json()) 
    // app.use(express.cookieParser('secret'));
    // app.use(express.cookieSession());
 

    app.use(
        session({
            secret: process.env.SECRET,
            store: MongoStore.create({
            mongoUrl: process.env.DATABASE_URL}),
            saveUninitialized: true,
            resave: false
        })
    )
}


module.exports = middleware