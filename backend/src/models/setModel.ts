import { Pool } from "pg";
import { getPoolConn } from "../services/databaseService"

export const selectAllSet = async () : Promise<SetType[] | null>=> {
    
  let result : any = []

  const qry = 
  `
    SELECT
        *
    FROM
        PUBLIC."set"
  `

  try {
    const conn : Pool = await getPoolConn();
    result = await conn.query(qry)
  } catch (e : any) {
    console.log(e.message)
    return null
  }

  return result.rows;

}