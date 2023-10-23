const express = require('express');
const app = express();
const {data} = require('./data')
app.get('/api/products',(req,res)=>{
    res.json(data.products)
})

app.listen(4000,()=>{
    console.log("Server is listening on port 4000")
})