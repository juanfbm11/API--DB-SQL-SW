import { Date } from "mssql";


export interface reserva{
    fechaReserva(arg0: string, fechaReserva: any): unknown;
    id:number;
    nombre:string;
    fechaRegistro:Date;
    total : number;
}
