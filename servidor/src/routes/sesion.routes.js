import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  console.log(req.body);
  return res.send(req.body);
});

export default router;
