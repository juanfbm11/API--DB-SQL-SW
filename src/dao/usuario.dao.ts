import getconnection from "../conexion/connection";
import { login } from "../models/login";
import { usuario } from "../models/usuario";

export const listar = async (): Promise<usuario[]> => {
  try {
    let tsql = "SELECT * FROM usuario";
    const pool = await getconnection();
    let rs = await pool.query<usuario>(tsql);
    if (rs != undefined) {
      return rs.recordset;
    }
    return [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createUsuario = async (usuario: usuario): Promise<usuario> => {
  try {
    const tsql =
      "INSERT INTO usuario (nombre, fechaRegistro, nombreUsuario, contrasena, correo) VALUES (@nombre, @fechaRegistro, @nombreUsuario, @contrasena, @correo)";
    const pool = await getconnection();
    await pool
      .request()
      .input("nombre", usuario.nombre)
      .input("fechaRegistro", usuario.fechaRegistro)
      .input("nombreUsuario", usuario.nombreUsuario)
      .input("contrasena", usuario.contrasena)
      .input("correo", usuario.correo)
      .query(tsql);
    return usuario; // Retorna el usuario creado
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUsuario = async (
  id: number,
  usuario: usuario
): Promise<usuario> => {
  try {
    const tsql =
      "UPDATE usuario SET nombre = @nombre, fechaRegistro = @fechaRegistro , nombreUsuario = @nombreUsuario, contrasena = @contrasena, correo = @correo WHERE id = @id";
    const pool = await getconnection();
    await pool
      .request()
      .input("id", id)
      .input("nombre", usuario.nombre)
      .input("fechaRegistro", usuario.fechaRegistro)
      .input("nombreUsuario", usuario.nombreUsuario)
      .input("contrasena", usuario.contrasena)
      .input("correo", usuario.correo)
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
    await pool.request().input("id", id).query(tsql);
  } catch (error) {
    throw error;
  }
};

export const loguear = async (l: login): Promise<usuario[]> => {
  try {
    let tsql = `SELECT * FROM usuario WHERE nombreUsuario='${l.nombreUsuario}' AND contrasena='${l.contrasena} '`;
    const pool = await getconnection();

    let rs = await pool.query<usuario>(tsql);
    if (rs != undefined) {
      return rs.recordset;
    }
    return [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
