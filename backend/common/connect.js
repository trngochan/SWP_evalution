var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "cours",
});

connection.connect(function (err) {
    if(err) console.error("ket noi khong thanh cong");

})

module.exports = connection;
