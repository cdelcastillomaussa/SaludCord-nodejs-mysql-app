const express = require('express')
const router = express.Router()

router.get('/', (request, response) =>{
    response.render('home')
})

router.get('/info', (request, response) =>{
    response.render('info')
})

router.get('/login', (request, response) =>{
    response.render('login')
})

module.exports = {
    router
}