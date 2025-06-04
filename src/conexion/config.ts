import { config } from "mssql";

export const sqlConfig : config = {
    user:'sa',
    password:'1234',
    database:'APIPERRITOS',
    server:'localhost',
    //port:123165 no estandar
    options:{
        trustServerCertificate: true,
        encrypt:true
    }

    

}
       

