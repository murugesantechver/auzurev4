// app.ts
import express, { Request, Response } from "express";
import morgan from "morgan";
const app = express();

// app.use(morgan("combined"));

console.log("app>>>>>>>>");
app.get("/api/user", (req: Request, res: Response) => {
  res.send("Hello from Express!");
});

export default app;
