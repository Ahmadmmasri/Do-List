
//jshint esversion:6

const express= require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended: true}));
var itemsList=[];
app.use(express.static(__dirname + '/public'));
const dateModule=require(__dirname+'/date.js');

//using ejs
app.set("view engine", "ejs");
var dayName=""
app.get("/" ,(req,res)=>{
    //complicated way
  /*   days=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
       switch(day){
           case 0: dayName= days[0]; break;
           case 1: dayName= days[1]; break;
           case 2: dayName= days[2]; break;
           case 3: dayName= days[3]; break;
           case 4: dayName= days[4]; break;
           case 5: dayName= days[5]; break;
           case 6: dayName= days[6]; break;
           default: console.log('error');
       } */

       //easy way
      const dayName =dateModule.getDay();
      const dayNumber =dateModule.getDate();
      res.render('main-body',{kindOfDay: dayName, newItem: itemsList, dayInNumber: dayNumber});
    });

app.post("/",(req,res)=>{
   var item= req.body.value;
   itemsList.push(item);
   res.redirect("/");
})



app.listen(4000,(req,res)=>{
    console.log("works on 3000 port");
});