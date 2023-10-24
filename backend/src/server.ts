import express from "express";
import cors from "cors";
import "dotenv/config";

export const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send(`My favorite colour is ${process.env.my_secret_colour}`);
});

app.listen(port, () => {
  console.log(`Backend API Listening on port ${port}`);
});
