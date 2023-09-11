import { Router } from "express";
import { createNewMessage, getAllMessages } from "./controllers/message";

const messageRoutes = Router();

messageRoutes.get("/", getAllMessages);
messageRoutes.post("/", createNewMessage);

export default messageRoutes;
