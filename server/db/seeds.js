//create database(planets), add collection

use solarSystem;
db.dropDatabase();

db.solarSystemCollection.insertMany([
    {
        name: "Mercury",
        pronunciation: "muh-kyuh-ree",
  
        
    },
    {
        name: "Blq blq",
        fact_1: "blq blq blq blq blq blq"

    },
    {
        name: "Yo Yo",
        fact_1: "IP Man",
        fact_2: "Bruce Lee"

    }
   
]);