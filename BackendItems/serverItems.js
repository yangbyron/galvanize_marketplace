const express =require('express');
const app = express();
let cors = require('cors');
const config = require('./config')[process.env.NODE_ENV || "dev"]
const PORT = config.port;

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: config.connectionString
});

pool.connect();
app.use(cors());
app.use(express.json());

app.get('/api/items', (req, res) => {
    console.log('Get Request')
    pool.query(`SELECT * FROM items;`)
    .then(result => {
        res.send(result.rows);
    })
    .catch(e => console.log(e.stack));
})
app.post("/api/createItems", (req, res) => {
    let createItem = req.query
    console.log(createItem);
    pool.query(`INSERT INTO items (name, description, price, image_path, category, is_sold)
    VALUES ($1, $2, $3, $4, $5, $6);`, [createItem.name, createItem.description, createItem.price, createItem.image_path, createItem.category, false])
    .then(result => {
        res.send(result.rows);
    })
    .catch(e => console.log(e.stack));
});
app.delete('/api/deleteItems/:id', (req, res) => {
    let itemId = req.params.id;
    console.log('Sold ID#', itemId);
    pool.query(`DELETE FROM items WHERE item_id = ${itemId};`)
    .then(res.send('SOLD'))
    .catch(e => console.log(e.stack))
})

app.get('/api/cart/:id', (req, res) => {
    let id = req.params.id
    pool.query(`SELECT * FROM cart WHERE user_id=($1)`,[id])
    .then((results) =>  {
        res.send(results.rows)
    })
    .catch(e => console.log(e.stack));
})
app.post('/api/cart', (req, res) => {
    pool.query(`INSERT INTO cart (user_id,item_id) VALUES ($1,$2)`, [req.body.user_id,req.body.item_id])
    .then(result => {
        res.end()
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
