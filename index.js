const express = require('express');
const reqFilter=require('./middleware.js')
const path= require('path');

const app = express()
const publicPath=path.join(__dirname,'public')
const route = express.Router()
app.set('view engine', 'ejs')



route.use(reqFilter); //use for assign middleware in route var 
//this middleware apply in each routes
// this is method for apply middleware in all routes  
// always defin in top
// app.use(reqFilter)

app.get('/', (req, resp) => {
    resp.sendFile(`${publicPath}/`)
})

app.get('/help', (req, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})

route.get('/profile', (req, resp) => {
    const user={
        "name":"Suraj Das",
        "class":"12",
        "year":"2022",
        "subjects":['Hindi','English','Biology','History']
    };
    const user1={
        "name":"Ram Das",
        "class":"12"
    };
    resp.render('profile',{user,user1})
})

// it's router for 404 page error 
// app.get('*', (req, resp) => {
//     resp.sendFile(`${publicPath}/nopage.html`)
// })
// note: if you using route-middleware then dont use this 404 page code

app.use('/', route) //use for router level middleware

app.listen(3000, () => {
    console.log('App Listen port 3000')
})

