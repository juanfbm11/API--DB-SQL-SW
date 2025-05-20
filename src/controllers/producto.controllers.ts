import * as productodao from '../dao/producto.dao';
import { producto } from '../models/producto';


export const getproducto = async (): Promise<producto[]> =>{
    try {
        let p = await productodao.listar();
        return p;        
    } catch (error) {
        throw error;
    }
};

export const createProducto = async (producto:producto): Promise<producto> =>{
    try {
        let b = await productodao.createProducto(producto);
        return b;
    } catch (error) {
        throw error;
    }
};

export const updateProducto = async (id: number, producto: producto): Promise<producto> =>{
    try {
         return await productodao.updateProducto(id,producto);
    } catch (error) {
        throw error;
    }
};

export const deleteProducto = async (id: number): Promise<void> =>{
    try {
        await productodao.deleteProducto(id);
    } catch (error) {
        throw error;
    }
}
