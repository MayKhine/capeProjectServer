import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("Cape Cod Server");
  } catch (error) {
    next(error);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

app.post("/validate", (req: Request, res: Response) => {
  const data = req.body;
  console.log("post receivedd and data is : ", data);

  res.send(validate(data.password));
});

const validate = (password: string) => {
  return password === "abcd";
};
