const express = require('express')
const app = express()

app.post('/api' , (req , res ) =>{
    res.send({message : 'nikhil'})
});

app.listen(8080, () => console.log('Server Started'))