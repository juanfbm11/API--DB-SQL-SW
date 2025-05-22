import * as reservadao from '../dao/reserva.dao';
import {reserva}    from '../models/reserva'

export const getReserva = async (): Promise<reserva[]> => {
    try {
      let u = await reservadao.listar();
      return u;
    } catch (error) {
      throw error;
    }
  };

export const createReserva = async (reserva:reserva): Promise<reserva> =>{
  try {
    let a = await reservadao.createReserva(reserva);
    return  a;
  } catch (error) {
    throw error;
  }
};

export const updateReserva = async (id: number, reserva: reserva): Promise<reserva> => {
    try {
        return await reservadao.updateReserva(id, reserva);
    } catch (error) {
        throw error;
    }
};

export const deleteReserva = async (id: number): Promise<void> => {
    try {
        await reservadao.deleteReserva(id);
    } catch (error) {
        throw error;
    }
};
