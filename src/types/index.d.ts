import mongoose from "mongoose";

export interface MessageInterface extends mongoose.Document {
  name: string;
  message: string;
}
