const express = require('express')
const app = express()
const PORT = 3030
const path = require('path')

//configuracion
app.use(express.static(path.join(__dirname,'public')))

//rutas
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','index.html')))

app.listen(PORT, () => console.log(`servidor: http://localhost:${PORT}`))