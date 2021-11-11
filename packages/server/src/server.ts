import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Yo World!" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
