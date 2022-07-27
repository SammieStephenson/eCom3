const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sam15276mie",
    database: "EcomThree",
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
        }
    });
});

app.listen(3306, () => {
    console.log(`Console server listening on port 3306.`);
});
console.log("test");