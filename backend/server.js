const express = require("express")
const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv")
const cors = require("cors")
const app = express()
const port = 4000


app.use(cors())
app.use(express.json());
dotenv.config()


//data base connect


const uri = process.env.STRING_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



app.get("/", (req, res) =>{
    client.connect((err, db) => {
      console.log("Database connected");
      if(err ||!db){return false}
        db.db("blog").collection("posts").find().toArray((err, results) => {
            if(!err){
                res.status(200).send(results)
            }
        })
      // perform actions on the collection object
    //   client.close();
    });
})


app.post("/insert", (req, res) => {
  client.connect((err, db) => {
    console.log("Database connected");
    if (err || !db) {
      return false;
    }
    db.db("blog")
      .collection("posts")
      .insertOne(req.body, (err, results) => {
        if (!err) {
          res.status(200).send(results);
        }
      })
      
    // perform actions on the collection object
    //   client.close();
  });
});



app.listen(port, () =>{
    console.log(`Server démarré avec succès sur le port ${port}`);
})