'use server'
const { MongoClient, ServerApiVersion } = require('mongodb');
const { dbPassword } = require("./../../config.json");
const uri = `mongodb+srv://ReadUser:${dbPassword}@acbuildsite.id5i3hu.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectDB() {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

/*
    finally 
    {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

    run().catch(console.dir);

    const data = await client.db("ACDatabasePreRelease").collection("ACUnitSpecs");
    console.log(await data.findOne({name: "VP-67LD"}));
*/