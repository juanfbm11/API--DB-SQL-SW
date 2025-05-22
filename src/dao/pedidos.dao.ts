import getconnection from "../conexion/connection";
import { Pedidos } from "../models/pedidos";

export const listar = async (): Promise<Pedidos[]> =>{
    try {
        let tsql = "SELECT * FROM Pedidos";
        const pool = await getconnection();
        let rs = await pool.query<Pedidos>(tsql);
        if (rs !=undefined) {
            return rs.recordset
        }
        return [];
    } catch (error) {
        console.log(error)
        throw error;
        
    }
}

export const createPedidos = async (Pedidos: Pedidos): Promise<Pedidos> => {
    try {
        const tsql = "INSERT INTO Pedidos (nombre, fechaRegistro, total) VALUES (@nombre, @fechaRegistro, @total)";
        const pool = await getconnection();
        await pool.request()
            .input('nombre', Pedidos.nombre)
            .input('fechaRegistro', Pedidos.fechaCompra)
            .input('total', Pedidos.total)
            .query(tsql);
        return Pedidos; 
    } catch (error) {        
        throw error;
    }
};

export const updatePedidos = async (id: number, Pedidos: Pedidos): Promise<Pedidos> => {
    try {
        const tsql = "UPDATE Pedidos SET nombre = @nombre, fechaRegistro = @fechaRegistro, total=@total WHERE id = @id";
        const pool = await getconnection();
        await pool.request()
            .input('id', id)
            .input('nombre', Pedidos.nombre)
            .input('fechaCompra', Pedidos.fechaCompra)
            .input('total', Pedidos.total)
            .query(tsql);
        return Pedidos; 
    } catch (error) {        
        throw error;
    }
};

export function deletePedidos(id: number) {
    throw new Error('Function not implemented.');
}

