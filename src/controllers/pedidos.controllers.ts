import * as Pedidosdao from '../dao/pedidos.dao';
import { Pedidos } from '../models/pedidos';

export const getPedidos = async (): Promise<Pedidos[]> => {
    try {
      let p = await Pedidosdao.listar();
      return p;
    } catch (error) {
      throw error;
    }
  };

  export const createPedidos = async (p : Pedidos): Promise<Pedidos> =>{
    try {
      let x = await Pedidosdao.createPedidos(p);
      return  x;
    } catch (error) {
      throw error;
    }
  };

  export const updatePedidos = async (
    id: number, 
    Pedidos: Pedidos
  ): Promise<Pedidos> => {
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
