const express = require('express')
require('./config.js')
const Product = require('./product.js')

const app = express();
app.use(express.json()) // use for json request

// create data API
app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    let result = await data.save();
    result.then((result) => {
        console.log('Data Successfully Insert', result)
    }).catch((error) => {
        console.log('Error Insert', error)
    })
});

// show list of date
app.get("/list", async (req, resp) => {
    // let data = req.body;
    // if (data) {
    //     let result = await Product.find(data);
    //     resp.send(result);
    // } else {
    let result = await Product.find();
    resp.send(result);
    // }
});

app.delete("/delete/:_id", async (req, resp) => {
    // let data = req.params;
    if (req.params) {
        let result = await Product.deleteOne(req.params);
        resp.send(result);
    } else {
        resp.send('Please Add Data');
    }
});

app.put("/update/:_id", async (req, resp) => {
    // let data = new Product(req.body);
    if (req.params) {
        let result = await Product.updateOne(
            req.params, {
                $set: req.body
            }
        );
        resp.send(result);
    }
});


app.get("/search/:key", async (req, resp) => {
    console.log(req.params.key)
    let data = await Product.find({
        "$or": [{
                "name": {
                    $regex: req.params.key
                }
            },
            // {"price":{$regex:req.params.key}}
        ]
    });
    resp.send(data);
});

app.listen(3000, () => {
    console.log('App Listen port 3000')
})