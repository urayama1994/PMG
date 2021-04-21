const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
}
);

app.post('/',(req,res)=>{
    res.render('index.ejs')

});

app.listen(3003);