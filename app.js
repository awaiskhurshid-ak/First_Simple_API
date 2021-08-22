const express = require('express');
require('./db/conn')
const port = process.env.PORT || 3000;
const app = express()
const router = require('./routers/studentroutes')
const studentData = require('./models/students');

app.use(express.json())
app.use(router)

//listening server
app.listen(port,()=>{
    console.log(`connection is live at port:${port}`)
})