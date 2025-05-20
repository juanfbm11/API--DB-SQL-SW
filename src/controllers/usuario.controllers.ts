import * as usuariodao from '../dao/usuario.dao';
import {usuario} from '../models/usuario';


export const getUsuario = async (): Promise<usuario[]> => {
    try {
      let u = await usuariodao.listar();
      return u;
    } catch (error) {
      throw error;
    }
  };

export const createUsuario = async (usuario:usuario): Promise<usuario> =>{
  try {
    let a = await usuariodao.createUsuario(usuario);
    return  a;
  } catch (error) {
    throw error;
  }
};

export const updateUsuario = async (id: number, usuario: usuario): Promise<usuario> => {
    try {
        return await usuariodao.updateUsuario(id, usuario);
    } catch (error) {
        throw error;
    }
};

export const deleteUsuario = async (id: number): Promise<void> => {
    try {
        await usuariodao.deleteUsuario(id);
    } catch (error) {
        throw error;
    }
};

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

