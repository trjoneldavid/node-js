const express = require('express')
const router = express.Router()

const userRoutes = require('./routes/user')
const organizationRoutes = require('./routes/organization')

module.exports = (server) =>{
    organizationRoutes(router)
    userRoutes(router)
    server.use(router)
}