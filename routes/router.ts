import { Router, Request, Response } from "express";

export const router = Router();

// ===================================
//GET MENSAJES
// ===================================
router.get("/mensajes", (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: "todo esta bien",
  });
});

// ===================================
//POST MENSAJES
// ===================================
router.post("/mensajes", (req: Request, res: Response) => {
  const cuerpo = req.body.cuerpo;
  const de = req.body.de;

  res.json({
    ok: true,
    cuerpo,
    de,
  });
});

// ===================================
//POST MENSAJES/:id
// ===================================
router.post("/mensajes/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const cuerpo = req.body.cuerpo;
  const de = req.body.de;

  res.json({
    ok: true,
    id,
    cuerpo,
    de,
  });
});
