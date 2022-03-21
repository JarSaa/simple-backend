const { response } = require('express');
const express=require('express');
const req = require('express/lib/request');

const router=express.Router();

const bookTable=[
    {"id_book":1, "name":'Python',"author":'Artem'},
    {"id_book":2, "name":'JavaScript',"author":'Pekka'},
    {"id_book":3, "name":'SQL',"author":'Hovi'}
];

router.get('/:id?',function(request,response){
    if(request.params.id){
        let id=request.params.id-1;
        console.log(bookTable[id]);
        response.json(bookTable[id]);
    }
    else {
        response.json(bookTable);
    }

});

router.post('/',function(request,response){
    let sqldemo="insert into bookTable values(";
    sqldemo+=request.body.id_book+","+request.body.name+","+request.body.author+");"
    response.json(sqldemo);
});

router.put('/:id',function(request,response){
    let id_book=request.params.id;
    let name=request.body.name;
    let author=request.body.author;
    let sqldemo="update bookTable set name="+name+", author="+author+" WHERE id_book="+id_book;
    response.json(sqldemo);
});

router.delete('/:id',function(request, response){
    let id_book=request.params.id;
    let sqldemo="DELETE FROM bookTable WHERE id_book="+id_book;
    //response.json(sqldemo);
    response.send(sqldemo);
});

module.exports = router;