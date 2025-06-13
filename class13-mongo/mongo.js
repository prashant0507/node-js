const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://shrivastavaprashant91:fXxNiRhvllRMrkG9@namastenode.xli1nui.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // the following code examples can be pasted here...

  ///////////////////////////////////////////////////////////
  // Insert docs using insertMany
  //////////////////////////////////////////////////////////

  // const data = {
  //   firstname: 'Ajay',
  //   lastname: 'Kumar',
  //   city: 'Rurai',
  //   phonenumber: '986654432'
  // };

  // const insertResult = await collection.insertMany([data]);
  // console.log('Inserted documents =>', insertResult);

  ////////////////////////////////////////////////////////////
  // Insert docs using insertOne
  ////////////////////////////////////////////////////////////

  // const data = {
  //   firstname: 'Vijay',
  //   lastname: 'Tiwari',
  //   city: 'Rurai',
  //   phonenumber: '986654432'
  // };

  // const insertOneResult = await collection.insertOne(data);
  // console.log('Inserted one document =>', insertOneResult);

  /////////////////////////////////////////////////////////
  // Display all count
  /////////////////////////////////////////////////////////
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  //////////////////////////////////////////////////////////  
  // Total Count
  //////////////////////////////////////////////////////////

  //const countResult = await collection.count();
  const countResult = await collection.countDocuments({});
  console.log("COUNT RESULT", countResult);

  /////////////////////////////////////////////////////////
  // Find all documents with a filter of firstname: Ajay
  /////////////////////////////////////////////////////////

  const result = await collection.find({firstname:"Ajay"}).count();
  console.log("first name with Ajay",result)

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());