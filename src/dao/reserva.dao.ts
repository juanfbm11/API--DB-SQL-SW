import getconnection from "../conexion/connection";
import {reserva} from "../models/reserva";

export const listar = async (): Promise<reserva[]> =>{
    try {
        let tsql = "SELECT * FROM reserva";
        const pool = await getconnection();
        let rs = await pool.query<reserva>(tsql);
        if (rs !=undefined) {
            return rs.recordset
        }
        return [];
    } catch (error) {
        console.log(error)
        throw error;
        
    }
}

export const createReserva = async (reserva: reserva): Promise<reserva> => {
    try {
        const tsql = "INSERT INTO reserva (nombre, fechaReserva, total) VALUES (@nombre, @fechaReserva, @total)";
        const pool = await getconnection();
        await pool.request()
            .input('nombre', reserva.nombre)
            .input('fechaReserva', reserva.fechaReserva)
            .input('total', reserva.total)
            .query(tsql);
        return reserva; 
    } catch (error) {        
        throw error;
    }
};

export const updateReserva = async (id: number, reserva: reserva): Promise<reserva> => {
    try {
        const tsql = "UPDATE reserva SET nombre = @nombre, fechaReserva = @fechaReserva, total=@total WHERE id = @id";
        const pool = await getconnection();
        await pool.request()
            .input('id', id)
            .input('nombre', reserva.nombre)
            .input('fechaReserva', reserva.fechaReserva)
            .input('total', reserva.total)
            .query(tsql);
        return reserva; 
    } catch (error) {        
        throw error;
    }
};

export const deleteReserva = async (id: number): Promise<void> => {
    try {
        const tsql = "DELETE FROM reserva WHERE id = @id";
        const pool = await getconnection();
        await pool.request()
            .input('id', id)
            .query(tsql);
    } catch (error) {        
        throw error;
    }
};