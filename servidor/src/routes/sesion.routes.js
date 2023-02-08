import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  console.log(req.body);
  const parametros = req.params;
  return res.send(parametros);
});

export default router;
