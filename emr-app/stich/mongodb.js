import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

// Initialize a MongoDB Service Client
const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas-emr"
  );

// Instantiate a collection handle for todo.items
const patients = mongoClient.db("medisign_db").collection("patient");

export { patients };