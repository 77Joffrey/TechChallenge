const mysql = require("mysql");

let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root2",
  password: "12345",
  database: "dataengineer",
});

connection.connect((err) => {
  if (!err) {
    console.log("Database is Connected!");
  } else console.log(err);
});

module.exports = connection;
