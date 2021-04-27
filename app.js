const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
// フォームから送信された値を受け取る
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hkzv4gez',
    database: 'subject_manage'
  });

connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
  });



//ルートURL
app.get('/',(req,res)=>{
    res.render('index.ejs');
});


 //科目をTableに追加
app.post('/',(req,res)=>{
    connection.query(
        'INSERT INTO items(subject) VALUES(?)',
        [req.body.addSubject],
        (error,results) => {
            res.redirect('/');
        }
    );
});


app.listen(3003);
