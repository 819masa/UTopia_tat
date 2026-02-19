import express from "express";
import cors from "cors";
import usersRouter from "./routes/users";
import matchesRouter from "./routes/matches";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send({ ok: true, name: "UTopia (mock)" }));

app.use("/api/users", usersRouter);
app.use("/api/matches", matchesRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`);
});
