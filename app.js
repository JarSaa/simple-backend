const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors');
const bookRouter=require('./routes/book.js');
const exampleRouter=require('./routes/example');
const basicAuth = require('express-basic-auth');
const loginRouter=require('./routes/login');


const app = express();
app.use(cors());
dotenv.config();
app.use(express.urlencoded({extended:false}));

// app.use(basicAuth({users: { 'admin': '1234' }}))
app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))

app.use('/book',bookRouter);
app.use('/example',exampleRouter);
app.use('/login',loginRouter);

function myAuthorizer(username, password, cb){
    if(username===process.env.authUser && password ===process.env.authPassword){
        return cb(null, true);
    }
    else{
        return cb(null, false);
    }
}

const dotenv = require('dotenv');
dotenv.config();
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