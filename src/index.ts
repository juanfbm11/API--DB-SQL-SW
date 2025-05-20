import express from 'express';
import cors  from 'cors';
import productoRouter from './routes/producto.route'
import  usuarioRouter  from './routes/usuario.route'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/producto', productoRouter)
app.use('/api/usuario', usuarioRouter )


app.listen(PORT,()=>{
    console.log(`escuchando el puerto ${PORT}`)
});