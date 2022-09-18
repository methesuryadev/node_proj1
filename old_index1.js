const express = require('express')
const app = express()

app.get('/', (req, resp) => {
    resp.send(`
    <h3>Home page is call</h3>    
    <p>Home page desc</p>
    <a href='/help'>Help</a>
    <a href='/about'>About</a>
    <a href='/'>Home</a>
`)
})

app.get('/help', (req, resp) => {
    resp.send(`
    <h3>Help page is call</h3>
    <p>Help page desc</p>
    <a href='/help'>Help</a>
    <a href='/about'>About</a>
    <a href='/'>Home</a>
`)
})

app.get('/about', (req, resp) => {
    resp.send(`
        <h3>About page is call</h3>
        <p>About page desc</p>
        <a href='/help'>Help</a>
    <a href='/about'>About</a>
    <a href='/'>Home</a>
    `)
})


app.get('/queryinput', (req, resp) => {
    resp.send(`
        <h3>About page is call ${req.query.name}</h3>
        <p>About page desc</p>
        <a href='/help'>Help</a>
    <a href='/about'>About</a>
    <a href='/'>Home</a>
    `)
})


app.get('/api', (req, resp) => {
    resp.send([{
        "name":"Suraj Das",
        "class":"12",
        "year":"2022",
        "subjects":['Hindi','English','Biology','History']
    },{
        "name":"Ram Kumar",
        "class":"11",
        "year":"2021",
        "subjects":['Js','Go','Node','React']
    }])
})


app.listen(3000, () => {
    console.log('App Listen port 3000')
})