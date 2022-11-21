const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./config")[process.env.NODE_ENV || "dev"];
const PORT = config.PORT;
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
const { Client } = require("pg");
const client = new Client({
  connectionString: config.connectionString,
});
client.connect();

app.get("/user/api/:email", (req, res) => {
  console.log("getting info");
  const email = req.params.email;
  client
    .query("select * from users where user_email = $1;", [email])
    .then((data) => res.send(data.rows))
    .catch((e) => {
      res.send(e.stack);
    });
});

app.post("/user/api", (req, res) => {
  console.log("creating a user");
  const body = req.body;
  client
    .query(
      "INSERT INTO users (user_name, user_email, is_seller) VALUES ($1, $2, $3) returning *;",
      [body.user_name, body.user_email, body.is_seller]
    )
    .then((data) => {
      res.end();
    })
    .catch((e) => {
      res.send(e.stack);
    });
});

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
