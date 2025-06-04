import * as usuariocontrollers from "../controllers/usuario.controllers";
import Express from "express";
import { usuario } from "../models/usuario";
import { login } from "../models/login";

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
    .createUsuario(nuevoUsuario)
    .then((obj) => {
      rs.status(201).json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.post("/usuario/login", (rq, rs) => {
  const nuevoUsuario: usuario = rq.body;
  usuariocontrollers
    .createUsuario(nuevoUsuario)
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
  usuariocontrollers
    .deleteUsuario(parseInt(rq.params["id"]))
    .then(() => {
      rs.status(204).send();
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.post("/login", (rq, rs) => {
  const nuevoLogin: login = rq.body;
  usuariocontrollers
    .Login(nuevoLogin)
    .then((obj) => {
      if (obj.length == 0) {
        rs.status(401).send();
      } else {
        rs.status(200).json(obj[0]);
      }
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

export default router;
