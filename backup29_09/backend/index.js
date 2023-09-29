var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kalaivani:<password>@cluster0.lla9wfo.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
