//install and import express, cors, mongodb
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');
//middleware
//tell express to use cors and json
app.use(cors())//pass data between domains
app.use(express.json())//help work with post, can get req.body

//import mongo ,invoke connect on mongoClient
//get db, get collection , get router, tell express to use router with given route
MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true }, (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('solarSystem');
  const gamesCollection = db.collection('solarSystemCollection');
  const gamesRouter = createRouter(gamesCollection)
  app.use('/api/planets', gamesRouter);

  app.listen(9000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})

// REACT_APP_NASA_ENDPOINT="https://api.nasa.gov/"
// NASA_API_KEY="e2DUklJNf0lAp84tqwaRyECOOsJMbxh7EW3fgnfU";
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=${e2DUklJNf0lAp84tqwaRyECOOsJMbxh7EW3fgnfU}