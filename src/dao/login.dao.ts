import getconnection from "../conexion/connection";
import { login } from "../models/login";

export const listar = async (): Promise<login[]> => {
  try {
    let tsql = "SELECT * FROM usuario";
    const pool = await getconnection();
    let rs = await pool.query<login>(tsql);
    if (rs != undefined) {
      return rs.recordset;
    }
    return [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createLogin = async (login: login): Promise<login> => {
  try {
    const tsql =
      "INSERT INTO usuario ( nombreUsuario, contrasena, ) VALUES (  @nombreUsuario, @contrasena)";
    const pool = await getconnection();
    await pool
      .request()      
      .input("nombreUsuario", login.nombreUsuario)
      .input("contrasena", login.contrasena)   
      .query(tsql);
    return login; // Retorna el usuario creado
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateLogin = async (  
login: login): Promise<login> => {
  try {
    const tsql =
      "UPDATE usuario SET nombre =  nombreUsuario = @nombreUsuario, contrasena = @contrasena  WHERE id = @id";
    const pool = await getconnection();
    await pool
      .request()     
     .input("nombreUsuario", login.nombreUsuario)
      .input("contrasena", login.contrasena)
      .query(tsql);
    return login; 
  } catch (error) {
    throw error;
  }
};

export const deleteLogin = async (id: number): Promise<void> => {
  try {
    const tsql = "DELETE FROM usuario WHERE id = @id";
    const pool = await getconnection();
    await pool.request().input("id", id).query(tsql);
  } catch (error) {
    throw error;
  }
};



