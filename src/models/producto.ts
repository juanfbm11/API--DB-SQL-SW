import { Date } from "mssql";

export interface producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  image: string;
  categoria: string;
  cantidad:number;
}
