var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbnew");
  /*dbo.collection("students").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.sname);
    db.close();
  });
});*/

dbo.collection("students").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});