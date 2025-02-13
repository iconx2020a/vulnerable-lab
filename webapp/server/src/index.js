
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();

const db = require("./dbconnection");
var bodyParser = require('body-parser');
const cors = require("cors");
const https = require("https");
const fs = require("fs");


const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;
const models = require("./models");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { Model } = require("mongoose");

const app = express();
db.connect(process.env.DB_HOST);

//cors options to allow authorization cookies
app.use(cors({
  origin: true,
  credentials: true
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const getUser = (token) => {
  // console.log(token);
  if (token) {
    try {
      // return the user information from the token
      console.log(token);
     // console.log("inside toen");
      return token;
      //jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      // if there's a problem with the token, throw an error
      throw new Error("Session invalid");
    }
  }
};


app.get('/key', function(req, res){
if (req.headers.authorization!=='member'){
  const file = `${__dirname}/key/private.key`;
  res.download(file);
}
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    const token = req.headers.authorization;
    const user = getUser(token);
    return { models, user, req, res };
  },
});


server.start().then((req, res) => {
  server.applyMiddleware({ app, path: "/api" });
  https
    .createServer(
     // Provide the private and public key to the server by reading each
     // file's content with the readFileSync() method.
      {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
      },
      app
    )
    .listen(4000, () => {
      //console.log(fs.readFileSync("key.pem"));
      console.log(`Now browse to https://localhost:${port}` + server.graphqlPath);
    });

});
