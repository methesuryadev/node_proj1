const express = require('express')
const con = require('./config_mysql.js')

const app = express();
app.use(express.json())

app.get('/list', (req, resp) => {
    con.query('select * from test1', (err, result) => {
        if (err) {
            resp.send(err)
        } else {
            resp.send(result)
        }
    })
})

app.post('/add', (req, resp) => {
    let data = req.body
    console.log(data)
    let query = con.query('INSERT INTO test1 SET ?', data, (err, result, fields) => {
        if (err) {
            resp.send(err)
        } else {
            resp.send(result)
        }
    })
    console.log(query.sql);
})


app.put('/update/:id', (req, resp) => {
    let data = [req.body.name,req.body.price,req.params.id]
    let query = con.query('UPDATE test1 SET name = ?, price= ? WHERE id = ?', data, function (err, result, fields) {
        if (err) {
            resp.send(err)
        } else {
            resp.send(result)
        }
    });
    console.log(query.sql);
})


app.delete('/delete/:id', (req, resp) => {
    let query = con.query('delete from test1  WHERE id = ?', req.params.id, function (err, result, fields) {
        if (err) {
            resp.send(err)
        } else {
            resp.send(result)
        }
    });
    console.log(query.sql);
})



app.listen(3000, () => {
    console.log('App run on port no 3000')
});