const express = require('express')
const pool = require('../database')
const router = express.Router()

router.get('/', async (request, response)=>{
    const pacientes = await pool.query('SELECT * FROM pacientes_citas')
    response.render('pacientes/index', {pacientes}) 
})

router.get('/add', (request, response)=>{
    response.render('pacientes/add') 
})

router.post('/add', async (request, response)=>{
    const {tipocita, fechacita, horacita} = request.body
    const paciente = {
        tipocita,
        fechacita,
        horacita
    }
    await pool.query('INSERT INTO pacientes_citas SET ? ', paciente)    
    response.redirect('/pacientes')
})


router.get('/delete/:id', async (request, response)=>{
    const {id} = request.params
    await pool.query('DELETE FROM pacientes_citas WHERE id = ? ', [id])    
    response.redirect('/pacientes')
})

router.get('/edit/:id', async (request, response)=>{
    const {id} = request.params
    const pacientes = await pool.query('SELECT * FROM pacientes_citas WHERE id = ?', [id])
    response.render('pacientes/edit', {paciente: pacientes[0]}) 
})

router.post('/edit/:id', async (request, response)=>{
    const {id} = request.params
    const {tipocita, fechacita, horacita} = request.body
    const paciente = {
        tipocita,
        fechacita,
        horacita
    }
    await pool.query('UPDATE pacientes_citas set ? WHERE id = ? ', [paciente, id])    
    response.redirect('/pacientes')
    
})



module.exports = {
    router
}