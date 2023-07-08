'use server'
const { MongoClient, ServerApiVersion } = require('mongodb');
const { dbPassword } = require("./../../config.json");
const uri = `mongodb+srv://ReadUser:${dbPassword}@acbuildsite.id5i3hu.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

function partQueryMaker(currentSelect) {

  if(currentSelect === 'R-ARM UNIT' || currentSelect === 'L-ARM UNIT') {
      return {type: {$regex: 'arm'}};
  }
  else if(currentSelect === 'R-BACK UNIT' || currentSelect === 'L-BACK UNIT') {
      return {type: {$regex: 'back'}};
  }
  else {
      return {type: {$regex: currentSelect.toLowerCase()}};
  }
  
}

function menuQueryMaker(currentMenu) {
  switch (currentMenu) {
    case 'UNIT':
      return 'ACUnitSpecs';

    case 'FRAME':
      return 'ACFrameSpecs';

    case 'INNER':
      return 'ACInnerSpecs';

    case 'EXPANSION':
      return 'ACExpansionSpecs';

    default:
      throw new Error('Invalid menu option');
  }

}

export async function connectDB() {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

export async function preloadPartData(currentSelect, currentMenu) { //not really preloading rn, but will implement!

  const partQuery = partQueryMaker(currentSelect);
  const menuQuery = menuQueryMaker(currentMenu);

  const data = await client.db("ACDatabasePreRelease").collection(menuQuery);
  const organizedData = await data.find(partQuery).toArray(function(err, documents) {
    if (err) {
      console.log(err);
    }
  });

  const preloadedData = Object.values(organizedData)
    .filter(obj => obj.hasOwnProperty('name'))
    .map(obj => obj.name);

  return preloadedData;

}

    //console.log(await data.findOne({name: "VP-67LD"}));
