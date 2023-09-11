import mongoose from "mongoose";

const connectDB = async (dbURL: string) => {
  try {
    await mongoose.connect(dbURL, { dbName: "message-board" });
    process.stdout.write(`Database connected\n`);
  } catch (e) {
    process.stdout.write(`Error db connection ${e}\n`);
    process.exit(0);
  }
};

export default connectDB;
