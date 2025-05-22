import * as Pedidosdao from '../dao/pedidos.dao';
import { Pedidos } from '../models/pedidos';

export const getPedidos = async (): Promise<Pedidos[]> => {
    try {
      let u = await Pedidosdao.listar();
      return u;
    } catch (error) {
      throw error;
    }
  };

  export const createPedidos = async (Pedidos:Pedidos): Promise<Pedidos> =>{
    try {
      let a = await Pedidosdao.createPedidos(Pedidos);
      return  a;
    } catch (error) {
      throw error;
    }
  };

  export const updatePedidos = async (id: number, Pedidos: Pedidos): Promise<Pedidos> => {
      try {
          return await Pedidosdao.updatePedidos(id,Pedidos);
      } catch (error) {
          throw error;
      }
  };

  export const deletePedidos = async (id: number): Promise<void> => {
      try {
          await Pedidosdao.deletePedidos(id);
      } catch (error) {
          throw error;
      }
  };
