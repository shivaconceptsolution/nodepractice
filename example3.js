var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  database: "scsdigital"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "select * from student where rno=1003 and name='XYZ'";
  con.query(sql, function (err, result,fields) {
    if (err) throw err;
    if(result.length>0){
    console.log(result[0].rno);
    }
    else
    {
        console.log("result not found");
    }
  });
});