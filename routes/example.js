const { response } = require('express');
const { request } = require('express');
const express=require('express');

const router=express.Router();

router.get('/',function(request,response){
    console.log("Examplen juuri");
    response.send("Examplen juuri");
});

// router.get('/:id',function(request,response){
//     response.send("Annoit arvon "+request.params.id);
// });

router.use(function(request,response,next){
    console.log("Olen Middleware");
    next();
});

router.get('/second',function(request, response){
    response.send("Examplen second endpoint");
});

router.get('/third',(request, response)=>{
    response.send("Examplen third endpoint");
});

router.get('/mydata/:fname?/:lname?',function(request, response){
    console.log(request.params.fname);
    console.log(request.params.lname);
    if(request.params.fname){
        response.send("Etunimi="+request.params.fname+" Sukunimi="+request.params.lname);
    }
    else {
        response.send("Et antanut etunimeä");
    }    
});

router.post('/',function(request,response){
    console.log(request.body.fname);
    response.send(request.body);
});

module.exports = router;