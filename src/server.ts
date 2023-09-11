import express, { Express } from "express";
import messageRoutes from "./routes";
import bodyParser from "body-parser";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/messages", messageRoutes);

export default app;
