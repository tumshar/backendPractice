const { MongoClient } = require('mongodb');

const url ="mongodb+srv://tusharacharrya:opQI1Qh0gnM2bzLK@nodeproject.oibhb.mongodb.net/?retryWrites=true&w=majority&appName=nodeproject";

const client = new MongoClient(url);

const dbName="newdatabaseCreated";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

const data={
    "firstname":"cristiano",
    "lastname":"ronaldo",
    "club":"manchester united",
    "position":"forward",

};

 const insertResult = await collection.insertMany([data]);
 console.log('Inserted documents =>', insertResult);  



    // read

   // const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);

// const countResult = await collection.countDocuments({});
// console.log('Count of documents =>', countResult);


// find all documents with a filter of firstname ronaldo

const result = await collection.find({firstname:"cristiano"}).count(); // adding toArray() to get the result in array format
console.log('result =>', result);

    return "done";
}

main()        // promise
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());




   
 

// opQI1Qh0gnM2bzLK - password
// go to mongodb website
// create a free M0 cluster
// create a new project
// create a user
// get the connection string
// install mongodb compass
// create a database
// install mongodb package'
// create a connection from code
// CRUD operations