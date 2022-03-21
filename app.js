const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors');
const bookRouter=require('./routes/book.js')
const exampleRouter=require('./routes/example')
const req = require('express/lib/request')


const app = express();
app.use(cors());
dotenv.config();
app.use(express.urlencoded({extended:false}));

app.use('/book',bookRouter);
app.use('/example',exampleRouter);

var port=process.env.PORT;


app.listen(port, 
  function(){
    console.log('App listening on port '+port)
  },
);

app.get('/',function(request,response){
    console.log("polkua /koe  ");
    response.send("Express REST API");
});