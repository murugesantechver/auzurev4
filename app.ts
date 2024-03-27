// app.ts
import express, { Request, Response } from "express";
const app = express();

app.get("/api/user", (req: Request, res: Response) => {
  res.send("Hello from Express!");
});

export default app;
