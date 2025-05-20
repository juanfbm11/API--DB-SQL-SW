import sql, { ConnectionPool } from "mssql";
import { sqlConfig } from "./config";


export default async function getconnection() :Promise<ConnectionPool>{
    try {
      const conn = await  sql.connect(sqlConfig);
      return conn;
    } catch (error) {
        throw error;
        
    }
}