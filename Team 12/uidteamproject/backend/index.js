
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log("app is running"));

app.post("/login", (req, res) => {
  console.log("Login request received:", req.body);
  res.send("Login successful!");
});

