// inclusion de modulos
const express = require('express')
const fs = require('fs')
const path = require('path')
const expresshbs = require('express-handlebars')

//inicializaciones
const app = express()




// Variables globales
const PUERTO = 7000
app.use((request, response, next)=>{
    next()
})

//Configuraciones
app.set('puerto', PUERTO)
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', expresshbs({
    defaultLayout: 'principal',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/handlebars').helpers
}))
app.set('view engine', 'hbs')



//Middelewares - tomar peticiones de los clientes
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routes
app.use(require('./routes/index').router)
app.use('/registros', require('./routes/registros').router)
app.use('/pacientes', require('./routes/pacientes').router)  
app.use('/doctores', require('./routes/doctores').router)




//Public
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('puerto'), ()=>{
    console.log(`Servidor iniciado en http://localhost:${app.get('puerto')}`)
})