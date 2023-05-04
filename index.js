const express = require('express')  // import express
const mysql=require('./mysql')
const cors = require('cors')
const bodyParser = require("body-parser");
const corsOption = {
  origin:'*',
  credential:true,
  optionSuccessStatus:200
}
const app=express();   // instance
app.use(cors(corsOption));
const port=3000;

app.use(bodyParser.json())


app.post('/insert', (req, res) => {
  console.log("hitt");
  console.log(req.body)
  const  {animal_type,breed_name,average_life,average_size,common_color,hair_color}=req.body;
  console.log(animal_type,breed_name,average_life,average_size,common_color,hair_color,"data")

  const variable= `call add_records("${animal_type}","${breed_name}","${average_life}","${average_size}","${common_color}","${hair_color}")`;
  console.log(variable);
  mysql.query(variable, (error, results) => {
    if (error) {
      console.log("ooops error");
      
    } else {
      
      res.send({msg:"yfyftrdytr"});
    }
  });
});

app.post('/update', (req, res) => {
  console.log("hitt");
  console.log(req.body)
  const  {breed_id,animal_type,breed_name,average_life,average_size,common_color,hair_color}=req.body;
  console.log(breed_id,animal_type,breed_name,average_life,average_size,common_color,hair_color,"data")

  const variable= `call upd_records("${breed_id}","${animal_type}","${breed_name}","${average_life}","${average_size}","${common_color}","${hair_color}")`;
  console.log(variable);
  mysql.query(variable, (error, results) => {
    if (error) {
      console.log("ooops error");
      
    } else {
      
      res.send({msg:"yfyftrdytr"});
    }
  });
});

app.post('/delete', (req, res) => {
  console.log("hitt");
  console.log(req.body)
  const  {breed_id}=req.body;
  console.log(breed_id,"data")

  const variable= `call del_records("${breed_id}")`;
  console.log(variable);
  mysql.query(variable, (error, results) => {
    if (error) {
      console.log("ooops error");
      
    } else {
      
      res.send({msg:"yfyftrdytr"});
    }
  });
});

app.get('/catrecords',(req,res)=>{
  const que=`call cat_rec()`
  const sql=mysql.query(que,(err,result)=>{
    if(err)
    console.log("error");
    else
    console.log("result",result);
    res.send(result[0]);

  });
})
app.get('/dogrecords',(req,res)=>{
  const que=`call dog_rec()`
  const sql=mysql.query(que,(err,result)=>{
    if(err)
    console.log("error");
    else
    console.log("result",result);
    res.send(result[0]);

  });
})
app.get('/birdrecords',(req,res)=>{
  const que=`call bird_rec()`
  const sql=mysql.query(que,(err,result)=>{
    if(err)
    console.log("error");
    else
    console.log("result",result);
    res.send(result[0]);

  });
})
app.get('/allrecords',(req,res)=>{
  const que=`call all_rec()`
  const sql=mysql.query(que,(err,result)=>{
    if(err)
    console.log("error");
    else
    console.log("result",result);
    res.send(result[0]);

  });
})

//HELLO JUNAID

app.listen(port,()=>{
  console.log(`listening on the port ${port}`)
})

