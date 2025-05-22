import  * as Pedidoscontrollers from "../controllers/pedidos.controllers";
import  Express   from "express";
import {Pedidos} from "../models/pedidos"

const router = Express.Router();
router.get("/", (rq, rs) => {
  Pedidoscontrollers
    .getPedidos()
    .then((obj) => {
      rs.json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.post("/", (rq, rs) => {
  const nuevoPedidos: Pedidos = rq.body;
  Pedidoscontrollers
    .getPedidos()
    .then((obj) => {
      rs.status(201).json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.put("/:id", (rq, rs) => {
  const id = parseInt(rq.params.id);
  const PedidosActualizado: Pedidos = rq.body;
  Pedidoscontrollers
    .updatePedidos(id, PedidosActualizado)
    .then((obj) => {
      rs.json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.delete("/:id", (rq, rs) => {
  const id = parseInt(rq.params.id);
  Pedidoscontrollers
    .deletePedidos(id)
    .then(() => {
      rs.status(204).send();
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

export default router;
