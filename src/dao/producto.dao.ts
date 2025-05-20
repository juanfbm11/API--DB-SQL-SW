import getconnection from "../conexion/connection";
import { producto } from "../models/producto";

export const listar = async (): Promise<producto[]> => {
    try {
       let tsql = "SELECT * FROM producto";
       const pool = await getconnection();
       let rs = await pool.query<producto>(tsql);
       if (rs !=undefined) {
        return rs.recordset
       } 
       return []; 
    } catch (error) {
        console.log(error)
        throw error;
        
    }
}

export const createProducto = async (producto:producto): Promise<producto> =>{
    try {
         const tsql = "INSERT INTO producto (nombre, precio,stock,image,categoria) VALUES (@nombre, @precio,@stock,@image,@categoria)";
         const pool = await getconnection();
         await pool.request()
                .input('nombre', producto.nombre)
                .input('precio', producto.precio)
                .input('stock', producto.stock)
                .input('image', producto.image)
                .input('categoria', producto.categoria)
                .query(tsql);
         return producto;
    } catch (error) {
        throw error;
        
    }
};

export const updateProducto = async (id: number, producto:producto): Promise<producto> =>{
    try {
        const tsql= "UPDATE producto SET nombre = @nombre, precio = @precio, stock = @stock, image = @image, categoria = @categoria WHERE id = @id";
        const pool = await getconnection();
        await pool.request()
                .input('id', id)
                .input('nombre', producto.nombre)
                .input('precio', producto.precio)
                .input('stock', producto.stock)
                .input('image', producto.image)
                .input('categoria', producto.categoria)
                .query(tsql);
            return producto;        
    } catch (error) {
        throw error;
    }
};

export const deleteProducto = async (id:number): Promise<void> =>{
    try {
        const tsql = "DELETE FROM producto WHERE id = @id";
        const pool = await getconnection();
        await pool.request()
            .input('id', id)
            .query(tsql);
    } catch (error) {
        throw error;
    }
}



