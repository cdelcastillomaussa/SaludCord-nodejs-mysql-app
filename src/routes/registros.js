const express = require('express')
const pool = require('../database')
const router = express.Router()

router.get('/', async (request, response)=>{
    const registros = await pool.query('SELECT * FROM registros')
    response.render('registros/index', {registros}) 
})

router.get('/add', (request, response)=>{
    response.render('registros/add') 
})

router.post('/add', async (request, response)=>{
    const {identificacion, fullname, fecha, EPS, genero, username, password} = request.body
    const registro = {
        identificacion,
        fullname,
        fecha,
        EPS,
        genero,
        username,
        password
    }
    await pool.query('INSERT INTO registros SET ? ', [registro])    
    response.redirect('/registros')
})


router.get('/delete/:id', async (request, response)=>{
    const {id} = request.params
    await pool.query('DELETE FROM registros WHERE id = ? ', [id])    
    response.redirect('/registros')
})

router.get('/edit/:id', async (request, response)=>{
    const {id} = request.params
    const registros = await pool.query('SELECT * FROM registros WHERE id = ?', [id])
    response.render('registros/edit', {registro: registros[0]}) 
})

router.post('/edit/:id', async (request, response)=>{
    const {id} = request.params
    const {identificacion, fullname, fecha, EPS, genero, username, password} = request.body
    const registro = {
        identificacion,
        fullname,
        fecha,
        EPS,
        genero,
        username,
        password
    }
    await pool.query('UPDATE registros set ? WHERE id = ? ', [registro, id])    
    response.redirect('/registros')
    
})



module.exports = {
    router
}