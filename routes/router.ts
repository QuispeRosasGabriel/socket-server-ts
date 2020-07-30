import { Router, Request, Response } from "express";
import Server from "../classes/server";
import { Socket } from "socket.io";
import { usuariosConectados } from "../sockets/socket";
import { GraficasData } from "../classes/graficas";

export const router = Router();

const grafica = new GraficasData();

// ===================================
// GET GRAFICAS INFO
// ===================================
router.get("/graficas", (req: Request, res: Response) => {
  res.json(grafica.getDataGrafica());
});

// ===================================
//POST GRAFICAS INFO
// ===================================
router.post("/graficas", (req: Request, res: Response) => {
  const mes = req.body.mes;
  const unidades = Number(req.body.unidades);

  // const server = Server.instance;
  // server.io.emit("mensaje-nuevo", payload);
  grafica.incrementarValor(mes, unidades);

  res.json(grafica.getDataGrafica());
});

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

  const payload = {
    cuerpo,
    de,
  };

  const server = Server.instance;
  server.io.emit("mensaje-nuevo", payload);

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

  const payload = {
    de,
    cuerpo,
  };

  const server = Server.instance;
  server.io.in(id).emit("mensaje-privado", payload);

  res.json({
    ok: true,
    id,
    cuerpo,
    de,
  });
});

//Servicio para obtener el id de todos los usuarios
router.get("/usuarios", (req: Request, res: Response) => {
  const server = Server.instance;

  server.io.clients((err: any, clientes: string[]) => {
    if (err) {
      return res.json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      clientes,
    });
  });
});

//Obtener usuarios y sus nombres
router.get("/usuarios/detalle", (req: Request, res: Response) => {
  const clientes = usuariosConectados.getLista();
  res.json({
    ok: true,
    clientes,
  });
});
