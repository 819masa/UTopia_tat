import express from "express";
import { users } from "../mockData";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: "Not found" });
  res.json(user);
});

export default router;
