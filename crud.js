const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const saveInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = new Product({
        'name': 'iphone',
        'price': 1558
    })
    let result = await data.save();
    console.log('result', result)
}

const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateMany({
        'name': 'iphone'
    }, {
        $set: {
            price: 800
        }
    })
    console.log('update result', data)
}

const deleteInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({
        'name': 'iphone'
    });
    console.log('delete result', data)
}

const findInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({
        'name': 'iphone'
    });
    console.log('find result', data)
}
findInDB();