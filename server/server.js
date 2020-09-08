// importing
import express from "express";
import { Mongoose } from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware

// db config
const connection_url = "";

Mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParses: true,
  useUnifiedTopology: true,
});

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

// listen
app.listen(port, () => console.log(`Listening on localhost : ${port}`));
