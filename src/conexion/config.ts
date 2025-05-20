import { config } from "mssql"

export const sqlConfig = {
    user:'sa',
    password:'1234',
    database:'api_perritos_callejeros',
    server:'localhost',
    //port:123165 no estandar
    options:{
        trustServerCertificate: true,
        encrypt:true
    }

    

}
       

