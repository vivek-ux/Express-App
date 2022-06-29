const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

//get route for homepage.
app.get('/',(req,res) =>{
    res.render('home.ejs');
})

//get route to render form via which we can add new users.
app.get('/user',(req,res) =>{
    res.render('data.ejs');
})

//get route to render form via which we can delete users.
app.get('/deluser',(req,res) =>{
    res.render('deldata.ejs');
})

//post route to add users into our database.
app.post('/user',async (req,res) =>{
    let {fname,email} = req.body;
    await pool.query("insert into users(name,email) values($1,$2)",[fname,email]);
    res.redirect("/");  
})

//post route to delete users from our database.
app.post('/deluser',async (req,res) =>{
    console.log(req.body.email);
    await pool.query("delete from users where email = $1",[req.body.email]);
    res.redirect("/");
})


//app listening on port 3000(localhost).
const port = 3000;
app.listen(port,() =>{
    console.log(`Listening on port ${port}`);
})







