const { response } = require('express');
const express=require('express');
const book=require('../models/book_model')

const router=express.Router();



router.get('/:id?',function(request,response){
    if(request.params.id){
        let id=request.params.id-1;
        let data=book.getOneBook(id)
        console.log(data);
        response.json(data);
    }
    else {
        let data=book.getAllBooks();
        response.json(data);
    }

});

router.post('/',function(request,response){
    let data=book.addBook(request.body)
    response.json(data);
 });

router.put('/:id',function(request,response){
    let id_book=request.params.id;
    let data=book.updateBook(id_book, request.body)
    response.send(data)
    // let name=request.body.name;
    // let author=request.body.author;
    // let sqldemo="update bookTable set name="+name+", author="+author+" WHERE id_book="+id_book;
    // response.json(sqldemo);
});

router.delete('/:id',function(request, response){
    let id_book=request.params.id;
    let sqldemo="DELETE FROM bookTable WHERE id_book="+id_book;
    //response.json(sqldemo);
    response.send(sqldemo);
});

module.exports = router;