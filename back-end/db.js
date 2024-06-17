const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 33060, // Use the port your MySQL instance is listening on
  user: "root",
  password: "MySQL280510",
  database: "multiplyapostrophe",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

module.exports = connection;
