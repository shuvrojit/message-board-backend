import mongoose from "mongoose";
import { Request, Response } from "express";
import Message from "../models/message";

export const createNewMessage = async (req: Request, res: Response) => {
  try {
    await Message.create({
      name: req.body.name,
      message: req.body.message,
    });
    res.status(200).json({ message: "Message created" }).end;
  } catch (e) {
    console.log(e);
  }
};

export const getAllMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find();
    if (!messages) {
      res.status(404).json({ message: "no messages found" }).end;
    }
    res.status(200).json({ messages: messages }).end;
  } catch (e) {
    console.log(e);
  }
};
