import express from "express";
import { users } from "../mockData";

const router = express.Router();

// very naive matching: return other users as candidates
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const candidates = users.filter((u) => u.id !== userId).map((u) => ({
    candidate: u,
    score: Math.floor(Math.random() * 100)
  }));
  res.json(candidates);
});

export default router;
