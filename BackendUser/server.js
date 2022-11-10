const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config')[process.env.NODE_ENV || 'dev'];
const PORT = config.PORT
app.use(express.json());
app.use(cors());
const {Client} = require('pg');
const client = new Client ({
    connectionString:config.connectionString
})
client.connect();

app.get('/user/api/:id',(req,res)=>{
    const id = req.params.id;
    client.query('select * from users where id = $1;',[id])
    .then(data=>res.send(data.rows));
})
app.post('/user/api',(req,res)=>{
    console.log("creating a user")
    const body = req.body;
    client.query('INSERT INTO users (user_name, user_password, is_seller) VALUES ($1, $2, $3) returning *;',[body.user_name,body.user_password,body.is_seller])
    .then(data=>{
        res.end();
    });
})

app.listen(PORT,()=>{
    console.log('Listening to port',PORT)
})