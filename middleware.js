module.exports= reqFilter=((req,resp,next)=>{
    if(req.query.age < 18 || req.query.age==null){
        resp.send('Please enter your age');
    }else{
        next();
    }
})