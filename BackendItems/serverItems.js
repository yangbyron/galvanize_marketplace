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
    pool.query(`SELECT * FROM items_table;`)
    .then(result => {
        res.send(result.rows);
    })
    .catch(e => console.log(e.stack));
})
app.post("/api/createItems/", (req, res) => {
    let createItem = req.query
    console.log(createItem);
    pool.query(`INSERT INTO items ()
    VALUES ();`)
    .then(result => {
        res.send(result.rows);
    })
    .catch(e => console.log(e.stack));
});

app.delete('/api/deleteItems/:id', (req, res) => {
    let itemId = req.params.id;
    console.log(itemId);
    pool.query(`DELETE FROM items_table WHERE id = ${itemId}`)
    .then(res.send('SOLD'))
    .catch(e => console.log(e.stack))
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
