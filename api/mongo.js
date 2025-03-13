import mongoose, { Schema } from "mongoose";
import HandleEmail from "./sentEmail/email.js";

const URL = process.env.MONGO_URL;
const COLL = process.env.COLLECTION;
const apiKey = process.env.API_KEY;

const conn = await mongoose.createConnection(URL).asPromise();

if (!conn) {
  throw new Error("error connecting to database");
}

const schemaOptions = {
  id: { type: Number, unique: true, required: true },
  email: { type: String, unique: true, required: true },
};
const isModel = conn.model("emailModel", new Schema(schemaOptions), COLL);

export default async function handleServer(req, res) {
  res.setHeader(
    "access-control-allow-origin",
    "https://portfolio-eight-alpha-78.vercel.app"
  );
  res.setHeader("access-control-allow-methods", "POST, OPTIONS");
  res.setHeader("access-control-allow-headers", "content-type, authorization");
  res.setHeader("content-type", "application/json");

  const isAuthorize = req.headers.authorization;
  if (!isAuthorize) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Lacks Authorization header" }));
  }

  if (isAuthorize !== apiKey) {
    res.writeHead(401);
    return res.end(JSON.stringify({ error: "It lacks valid API Key" }));
  }

  switch (req.method) {
    case "OPTIONS":
      res.writeHead(200);
      res.end();
      break;
    case "POST":
      HandleEmail(isModel, req, res);
      break;
    default:
      res.writeHead(405);
      res.end(JSON.stringify({ error: "Invalid Request method" }));
      break;
  }
}
