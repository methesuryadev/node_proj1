const mysql= require('mysql')
const con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs_db',
})

con.connect((err)=>{
    if(err){
        console.log('Error in Mysql Connection',err)
        return;
    }else{
        console.log('Connection')
        return;
    }
})

module.exports=con