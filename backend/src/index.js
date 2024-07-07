import express from "express";
import diseasesRouter from "../routes/Diseases.routes.js";
import usersRouter from "../routes/Users.routes.js";

const app = express();

app.use(express.json());

app.use("/api/diseases", diseasesRouter);
app.use("/api/users", usersRouter);

app.listen(4001, () => {
  console.log(`App running on port 4001`);
});
