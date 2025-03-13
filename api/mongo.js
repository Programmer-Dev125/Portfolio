import mongoose, { mongo, Schema } from "mongoose";
import HandleEmail from "./sentEmail/email";

const URL = process.env.MONGO_URL;
const COLL = process.env.COLLECTION;
const apiKey = process.env.API_KEY;

const conn = await mongoose.createConnection(URL).asPromise();
if (!conn) {
  throw new Error("error connecting to database");
}

const schemaOptions = {
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  message: { type: String, required: true },
};
const isModel = conn.model("emailModel", new Schema(schemaOptions), COLL);

export default async function handleServer(req, res) {
  res.setHeader(
    "access-control-allow-origin",
    "https://portfolio-programmer-dev125s-projects.vercel.app"
  );
  res.setHeader("access-control-allow-methods", "POST");
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
    case "POST":
      HandleEmail(isModel, req, res);
      break;
    default:
      res.writeHead(405);
      res.end(JSON.stringify({ error: "Invalid Request method" }));
      break;
  }
}
