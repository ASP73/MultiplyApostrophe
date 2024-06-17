const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 33060, // Use the port your MySQL instance is listening on
  user: "",
  password: "",
  database: "",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

module.exports = connection;
