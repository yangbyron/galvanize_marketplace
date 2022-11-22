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
app.use(express.static('public'));
app.get('/api/items', (req, res) => {
    console.log('Get Request')
    pool.query(`SELECT * FROM items;`)
    .then(result => {
        res.send(result.rows);
    })
    .catch(e => console.log(e.stack));
})

app.get("/api/items/:email", (req, res) => {
    console.log("getting users email");
    const email = req.params.email;
    pool.query("select * from items where user_email = $1;", [email])
      .then((data) => res.send(data.rows))
      .catch((e) => {
        res.send(e.stack);
      });
  });

app.post("/api/createItems", (req, res) => {
    let createItem = req.body
    console.log(createItem);
    pool.query(`INSERT INTO items (name, description, price, image_path, category, is_sold, user_email)
    VALUES ($1, $2, $3, $4, $5, $6, $7);`, [createItem.name, createItem.description, createItem.price, createItem.image_path, createItem.category, false, createItem.user_email])
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

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
