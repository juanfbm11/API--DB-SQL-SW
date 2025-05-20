import * as productocontrollers from "../controllers/producto.controllers";
import Express from "express";
import { producto } from "../models/producto";

const router = Express.Router();
router.get("/", (rq, rs) => {
  productocontrollers
    .getproducto()
    .then((obj) => {
      rs.json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.post("/", (rq, rs) => {
  const nuevoProducto: producto = rq.body;
  productocontrollers
    .getproducto()
    .then((obj) => {
      rs.status(201).json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.put("/:id", (rq, rs) => {
  const id = parseInt(rq.params.id);
  const productoActualizado: producto = rq.body;
  productocontrollers
    .updateProducto(id, productoActualizado)
    .then((obj) => {
      rs.json(obj);
    })
    .catch((e) => {
      rs.status(500).json(e);
    });
});

router.delete( "/:id" , (rq, rs) =>{
    const id = parseInt (rq.params.id);
    productocontrollers
    .deleteProducto(id)
    .then(() =>{
        rs.status(204).send();
    })
    .catch((e) =>{
        rs.status(500).json(e);
    })
} );

export default router;
