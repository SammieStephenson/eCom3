const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ecommerce",
});

db.connect((err) => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log("Connection Successful");
    }
});

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            // console.log(result)
        }
    });
});

app.listen(8080, () => {
    console.log(`Console server listening on port 8080.`);
});
console.log("test");

