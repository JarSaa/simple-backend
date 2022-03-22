const { response } = require('express');
const express=require('express');

router.post('/',function(request,response){
        let username=request.body.username;
        let password=request.body.password;
        if(username===process.env.authUser && password===process.env.authPass){
                response.send(true);
        }
            else{
                response.send(false);
            }
        
});

const router=express.Router();