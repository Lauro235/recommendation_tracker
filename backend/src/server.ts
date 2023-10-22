import express from "express";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.listen(port, () => {
  console.log(`Backend API Listening on port ${port}`);
});
