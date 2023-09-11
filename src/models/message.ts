import mongoose from "mongoose";
import { MessageInterface } from "../types/";

const messageSchema = new mongoose.Schema<MessageInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      requried: true,
    },
  },
  {
    timestamps: true,
  },
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
