import app from "./server";
import * as dotenv from "dotenv";
import connectDB from "./db";

dotenv.config();

const dbURL = process.env.mongoURL!;
const PORT = process.env.PORT! || 8000;

connectDB(dbURL);

app.listen(PORT, () => {
  process.stdout.write(`Application running on port ${PORT}\n`);
});
