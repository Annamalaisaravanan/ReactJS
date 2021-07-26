const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'register',
    port:3305
});
db.connect()

app.get('/dashboard', (req,res)=>{

    db.query('SELECT * FROM signup',(err,result)=>{
        if(result.length>0){
            console.log('result fetched');
            console.log(result); 
            res.send(result);
            res.end();   
    }
    
    });
});




app.post('/register', (req,res)=>{

const firstname = req.body.firstname;
const lastname = req.body.lastname;
const email = req.body.email;
const password = req.body.password;
 
console.log('email',email);


  db.query('SELECT * FROM signup WHERE email=?',[email],(err,result)=>{
         if(err){
            console.log(err);
            console.log('error');
            res.send({err:err})
            res.end();
         }
         if(result.length>0){
            console.log('Registered data',result)
            res.send({message:'email already exist!!'})
            res.end();
         }else{
              db.query('INSERT INTO signup (firstname,lastname,email,password) VALUES (?,?,?,?)',[firstname,lastname,email,password],(err,result)=>{
                  if(!err){
                      res.send({message:"You have successfully registered"});
                      res.end();
                  } else{
                      console.log('The error is',err);
                      res.end();
                  }
              });
         }
  });

});


app.post('/login',(req,res)=>{
     const logmail = req.body.email;
     const logpass = req.body.password;
      
     console.log(logmail);
     console.log('working');

     db.query("SELECT * FROM signup WHERE email = ? and password = ?",
     [logmail,logpass],(err,result)=>{
           if(err){
            console.log(err);
            res.send({err:err})
               res.end();
           }
           if(result.length>0){
            console.log('result fetched');
            console.log(result)
            res.send(result)
            res.end();
           }
           else{
            console.log('Invalid password')
            res.send({message:"Invalid Username/password"})
            res.end();
           }
     }
     );

})



app.listen('3001', () =>{
    
    console.log('Running Test Server');
})
