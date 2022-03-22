const bookTable=[
    {"id_book":1, "name":'Python',"author":'Artem'},
    {"id_book":2, "name":'JavaScript',"author":'Pekka'},
    {"id_book":3, "name":'SQL',"author":'Hovi'}
];

const book={
    getAllBooks:function(){
        return bookTable;
    },
    getOneBook:function(id){
        return bookTable[id];
    },
    addBook:function(book_data){
        let id_book=book_data.id_book;
        let name=book_data.name;
        let author=book_data.author;
        let sqldemo="insert into bookTable values(";
        sqldemo+=id_book+","+name+","+author+");"
        return sqldemo;
        //return book_data;
    },
    updateBook:function(id, update_data){
        let sqldemo="update book(name,author) values(";
        sqldemo+=update_data.name+","+update_data.author;
        sqldemo+=") WHERE id_book="+id+";";

        return sqldemo;
    }
}

module.exports=book;