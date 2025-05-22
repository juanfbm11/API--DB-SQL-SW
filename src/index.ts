import express from 'express';
import cors  from 'cors';
import productoRouter from './routes/producto.route'
import  usuarioRouter  from './routes/usuario.route'
import pedidosRouter    from './routes/pedidos.route'
import reservaRouter from './routes/reserva.route'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/producto', productoRouter)
app.use('/api/usuario', usuarioRouter )
app.use('/api/reserva', reservaRouter )
app.use('/api/pedidos', pedidosRouter )


app.listen(PORT,()=>{
    console.log(`escuchando el puerto ${PORT}`)
});