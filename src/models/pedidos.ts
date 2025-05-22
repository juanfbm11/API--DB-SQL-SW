import { Date } from "mssql";

export interface Pedidos{
    id:number;
    nombre: String;
    fechaCompra:Date;
    total: number;
}