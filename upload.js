const express = require('express')
const EventEmitter= require('events')
const multer = require('multer')
const app = express();
const event = new EventEmitter();

let cnt=0;
event.on('countAPI',()=>{
    cnt++;
    console.log('API Count=',cnt)
})
const upload=multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + Date.now()+".jpg")
        }
    })
}).single('user_file');
app.post("/upload",upload,(req, resp) => {
    resp.send('Upload work');  
});

app.get('/create',(req,resp)=>{
    resp.send('API call')
    event.emit('countAPI')
})

app.listen(3000, () => {
    console.log('App Listen port 3000')
})