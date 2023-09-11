import express, { Express } from "express";
import messageRoutes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);
app.use(morgan("combined"));

app.use("/messages", messageRoutes);

export default app;
