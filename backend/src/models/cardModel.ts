import { Pool } from "pg";
import { getPoolConn } from "../services/databaseService"

export const getCardDetailById = async (id : string | null) => {
    let result : any = []

    const qry = 
    `
      SELECT 
        *
      FROM PUBLIC.card
      WHERE card.id = $1;
    `
  
    try {
      const conn : Pool = await getPoolConn();
      result = await conn.query(qry, [id])
    } catch (e : any) {
      console.log(e.message)
      return null
    }
  
    return result.rows;
  
}

export const getAllCardsBySet = async (id : string | null) : Promise<CardType[] | null>=> {
  let result : any = []

  const qry = 
  `
    SELECT 
      id, number, name
    FROM PUBLIC.card
    WHERE card.set_id = $1;
  `

  try {
    const conn : Pool = await getPoolConn();
    result = await conn.query(qry, [id])
  } catch (e : any) {
    console.log(e.message)
    return null
  }

  return result.rows

}