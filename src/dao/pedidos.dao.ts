import getconnection from "../conexion/connection";
import { Pedidos } from "../models/pedidos";

export const listar = async (): Promise<Pedidos[]> => {
  try {
    let tsql = "SELECT * FROM Pedidos";
    const pool = await getconnection();
    let rs = await pool.query<Pedidos>(tsql);
    if (rs != undefined) {
      return rs.recordset;
    }
    return [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createPedidos = async (Pedidos: Pedidos): Promise<Pedidos> => {
  try {
    const tsql =
      "INSERT INTO Pedidos(nombre,fechaCompra,email,ciudad,direccion, metodoPago,total) VALUES (@nombre, @fechaCompra, @email, @ciudad, @direccion, @metodoPago, @total)";
    const pool = await getconnection();
    await pool
      .request()
      .input("nombre", Pedidos.nombre)
      .input("fechaCompra", Pedidos.fechaCompra)
      .input("email", Pedidos.email)
      .input("ciudad", Pedidos.ciudad)
      .input("direccion", Pedidos.direccion)
      .input("metodoPago", Pedidos.metodoPago)
      .input("total", Pedidos.total)
      .query(tsql);
    return Pedidos;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export const updatePedidos = async (
  id: number,
  Pedidos: Pedidos
): Promise<Pedidos> => {
  try {
    const tsql =
      "UPDATE Pedidos SET nombre = @nombre, fechaCompra = @fechaCompra, email = @email, ciudad = @ciudad, direccion = @direccion,  metodoPago = @metodoPago,  total = @total WHERE id = @id";
    const pool = await getconnection();
    await pool
      .request()
      .input("id", id)
      .input("nombre", Pedidos.nombre)
      .input("fechaCompra", Pedidos.fechaCompra)
      .input("total", Pedidos.total)
      .input("email", Pedidos.email)
      .input("direccion", Pedidos.direccion)
      .input("ciudad", Pedidos.ciudad)
      .input("metodoPago", Pedidos.metodoPago)
      .query(tsql);
    return Pedidos;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

export const deletePedidos = async (id: number): Promise<void> => {
  try {
    const tsql = "DELETE FROM  Pedidos WHERE id = @id";
    const pool = await getconnection();
    await pool.request().input("id", id).query(tsql);
  } catch (error) {
    throw error;
  }
};
