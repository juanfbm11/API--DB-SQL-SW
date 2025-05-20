import getconnection from "../conexion/connection";
import { usuario } from "../models/usuario";


export const listar = async (): Promise<usuario[]> =>{
    try {
        let tsql = "SELECT * FROM usuario";
        const pool = await getconnection();
        let rs = await pool.query<usuario>(tsql);
        if (rs !=undefined) {
            return rs.recordset
        }
        return [];
    } catch (error) {
        console.log(error)
        throw error;
        
    }
}

export const createUsuario = async (usuario: usuario): Promise<usuario> => {
    try {
        const tsql = "INSERT INTO usuario (nombre, fechaRegistro) VALUES (@nombre, @fechaRegistro)";
        const pool = await getconnection();
        await pool.request()
            .input('nombre', usuario.nombre)
            .input('fechaRegistro', usuario.fechaRegistro)
            .query(tsql);
        return usuario; // Retorna el usuario creado
    } catch (error) {        
        throw error;
    }
};

export const updateUsuario = async (id: number, usuario: usuario): Promise<usuario> => {
    try {
        const tsql = "UPDATE usuario SET nombre = @nombre, fechaRegistro = @fechaRegistro WHERE id = @id";
        const pool = await getconnection();
        await pool.request()
            .input('id', id)
            .input('nombre', usuario.nombre)
            .input('fechaRegistro', usuario.fechaRegistro)
            .query(tsql);
        return usuario; // Retorna el usuario actualizado
    } catch (error) {        
        throw error;
    }
};

export const deleteUsuario = async (id: number): Promise<void> => {
    try {
        const tsql = "DELETE FROM usuario WHERE id = @id";
        const pool = await getconnection();
        await pool.request()
            .input('id', id)
            .query(tsql);
    } catch (error) {        
        throw error;
    }
};



