import express, { Express } from "express";
import messageRoutes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const corsOptions = {
// origin: "http://localhost:5173", // Replace with your React app's URL
// };

// app.use(cors(corsOptions));
app.use(cors());
app.use(morgan("combined"));

app.use("/messages", messageRoutes);

export default app;
