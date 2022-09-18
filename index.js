const express = require('express');
const path= require('path');

const app = express()
const publicPath=path.join(__dirname,'public')
app.set('view engine', 'ejs')


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

app.get('/profile', (req, resp) => {
    const user={
        "name":"Suraj Das",
        "class":"12",
        "year":"2022",
        "subjects":['Hindi','English','Biology','History']
    };
    resp.render('profile',{user})
})

app.get('*', (req, resp) => {
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(3000, () => {
    console.log('App Listen port 3000')
})