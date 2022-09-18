const express = require('express');
const path= require('path');

const app = express()
const publicPath=path.join(__dirname,'public')
console.log(publicPath);

app.get('/', (req, resp) => {
    resp.sendFile(`${publicPath}/`)
})

app.get('/help', (req, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})


app.listen(3000, () => {
    console.log('App Listen port 3000')
})