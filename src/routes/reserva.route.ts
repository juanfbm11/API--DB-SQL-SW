import * as reservacontrollers from "../controllers/reserva.controllers";
import  Express  from "express";
import { reserva } from "../models/reserva";

const router = Express.Router();
router.get("/", (rq, rs) => {
  reservacontrollers
    .getReserva()
    .then((obj) => {
      rs.json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.post("/", (rq, rs) => {
  const nuevoReserva: reserva = rq.body;
  reservacontrollers
    .getReserva()
    .then((obj) => {
      rs.status(201).json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.put("/:id", (rq, rs) => {
  const id = parseInt(rq.params.id);
  const reservaActualizado: reserva = rq.body;
  reservacontrollers
    .updateReserva(id, reservaActualizado)
    .then((obj) => {
      rs.json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.delete("/:id", (rq, rs) => {
  const id = parseInt(rq.params.id);
  reservacontrollers
    .deleteReserva(id)
    .then(() => {
      rs.status(204).send();
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

export default router;
