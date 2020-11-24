const express = require('express')
const pool = require('../database')
const router = express.Router()

router.get('/', async (request, response)=>{
    const doctores = await pool.query('SELECT * FROM doctores')
    response.render('doctores/index', {doctores}) 
})

router.get('/add', (request, response)=>{
    response.render('doctores/add') 
})

router.post('/add', async (request, response)=>{
    const {tipocita, paciente, fechacita, horacita} = request.body
    const doctor = {
        tipocita,
        paciente,
        fechacita,
        horacita
    }
    await pool.query('INSERT INTO doctores SET ? ', doctor)    
    response.redirect('/doctores')
})


router.get('/delete/:id', async (request, response)=>{
    const {id} = request.params
    await pool.query('DELETE FROM doctores WHERE id = ? ', [id])    
    response.redirect('/doctores')
})

router.get('/edit/:id', async (request, response)=>{
    const {id} = request.params
    const doctores = await pool.query('SELECT * FROM doctores WHERE id = ?', [id])
    response.render('doctores/edit', {doctor: doctores[0]}) 
})

router.post('/edit/:id', async (request, response)=>{
    const {id} = request.params
    const {tipocita, paciente, fechacita, horacita} = request.body
    const doctor = {
        tipocita,
        paciente,
        fechacita,
        horacita
    }
    await pool.query('UPDATE doctores set ? WHERE id = ? ', [doctor, id])    
    response.redirect('/doctores')
    
})



module.exports = {
    router
}