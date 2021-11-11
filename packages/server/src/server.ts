import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Yo World!" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
