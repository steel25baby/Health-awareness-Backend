import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import usersRouter from "../routes/Users.routes.js"
import diseasesRouter from "../routes/Diseases.routes.js"
import {config} from "dotenv";

config();


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["POST", "GET", "DELETE", "PATCH"],
  credentials: true,
}));

app.use("/api/users", usersRouter);
app.use("/api/diseases", diseasesRouter)

app.listen(4001, () => {
  console.log(`App running on port 4001`);
});
