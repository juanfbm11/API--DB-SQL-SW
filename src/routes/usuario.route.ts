import * as usuariocontrollers from "../controllers/usuario.controllers";
import Express from "express";
import { usuario } from "../models/usuario";

const router = Express.Router();
router.get("/", (rq, rs) => {
  usuariocontrollers
    .getUsuario()
    .then((obj) => {
      rs.json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

// Crear un nuevo usuario
router.post("/", (rq, rs) => {
  const nuevoUsuario: usuario = rq.body;
  usuariocontrollers
    .getUsuario()
    .then((obj) => {
      rs.status(201).json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

// Actualizar un usuario
router.put("/:id", (rq, rs) => {
  const id = parseInt(rq.params.id);
  const usuarioActualizado: usuario = rq.body;
  usuariocontrollers
    .updateUsuario(id, usuarioActualizado)
    .then((obj) => {
      rs.json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

// Eliminar un usuario
router.delete("/:id", (rq, rs) => {
  const id = parseInt(rq.params.id);
  usuariocontrollers
    .deleteUsuario(id)
    .then(() => {
      rs.status(204).send();
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

export default router;
