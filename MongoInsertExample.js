var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,function(err,db){
    if(err)
    throw console.error();
    var dbo = db.db("mydbnew");
    dbo.collection("students").insertOne({rno:1002,sname:"mno"},function(err,res){
        if(err)
        throw err
        console.log('data inserted successdfully')
    });
})
