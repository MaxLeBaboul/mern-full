const express = require("express")
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express()
const port = 4000

//data base connect


const uri =
  "mongodb+srv://Maxwell:RjXk9FcLfkPqQt19@fullstack-mern.len9zxu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    console.log("Database connected")
//   const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get("/", (req, res) =>{
    res.json({"ok": "démarré"})
})

app.listen(port, () =>{
    console.log(`Server démarré avec succès sur le port ${port}`);
})