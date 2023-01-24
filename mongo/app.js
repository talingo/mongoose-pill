const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//Connection URL
const url = 'mongodb://localhost:27017';

//Database Name
const dbName = 'storeDB';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true});

// Use connect method to connect to the Server
client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to server")
})

const db = client.db(dbName);



const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('products');
    // Insert some documents
    collection.insertMany([
      {
       name: "Pen",
       price: 1,
       stock: 30
    }, 
      {
       name: "Pencil",
       price: 0.8,
       stock: 30
    }, 
      {
       name: "Rubber",
       price: 0.5,
       stock: 24
    }
    ], function(err, result) {
      assert.equal(err, null); 
      assert.equal(3,result.insertedCount);
      assert.equal(3,Object.keys(result.insertedIds).length);
  
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

  insertDocuments(db, function() {
    client.close();
  });