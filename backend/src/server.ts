import express from "express";
import cors from "cors";
import "dotenv/config";

export const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

console.log(process.env.my_secret)

app.listen(port, () => {
  console.log(`Backend API Listening on port ${port}`);
});
