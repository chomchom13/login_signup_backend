import express from "express";
import "./config/db.js";
import { authRouter } from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api", authRouter);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
