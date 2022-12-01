import express, { Application, Request, Response } from "express";
const PORT: number = 2003;
const App: Application = express();

import router from "./router/carRouter";
require("./config/db.ts");

App.use(express.json());

App.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    messsage: "Server Up🚀🚀🚀",
  });
});
App.use("/api", router);
App.listen(PORT, () => {
  console.log(`Server Up on PORT: ${PORT}`);
});
