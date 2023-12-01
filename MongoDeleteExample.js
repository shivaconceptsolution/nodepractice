var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbnew");
  var myquery = { rno: 1001 };
  dbo.collection("students").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log(" document deleted");
    db.close();
  });
});