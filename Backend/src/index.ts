import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express with TS");
});

app.listen(port, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
