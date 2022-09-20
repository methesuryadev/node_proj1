const express = require('express')
require('./config.js')
const Product= require('./product.js')

const app = express();
app.use(express.json()) // use for json request
app.post("/create",async (req,resp)=>{
    let data = new Product(req.body);
    let result = await data.save();
    result.then((result)=>{
        console.log('Data Successfully Insert',result)
    }).catch((error)=>{
        console.log('Error Insert',error)
    })
});

app.listen(3000, () => {
    console.log('App Listen port 3000')
})
