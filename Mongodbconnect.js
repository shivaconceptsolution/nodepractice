const { MongoClient } = require('mongodb')

var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/mydbnew"
MongoClient.connect(url,function(err,db){
    if(err)
    throw console.error();
    console.log('database created')
})
