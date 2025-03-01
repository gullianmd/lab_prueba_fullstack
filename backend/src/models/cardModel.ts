import { Pool } from "pg";
import { getPoolConn } from "../services/databaseService"

export const getCardDetailById = async (id: string | null) => {
  let result: any = []

  const qry =
    `
      SELECT DISTINCT
        *
      FROM PUBLIC.card c
      WHERE c.id = $1
    `

  try {
    const conn: Pool = await getPoolConn();
    result = await conn.query(qry, [id])
  } catch (e: any) {
    console.log(e.message)
    return null
  }

  return result.rows;

}

export const getAllCardsBySet = async (id: string | null): Promise<CardType[] | null> => {
  let result: any = []

  const qry =
    `
      SELECT DISTINCT ON (c.id) 
          c.id, c.number, c.name, i.url as image
      FROM PUBLIC.card c
      LEFT JOIN PUBLIC.image i
        ON c.id = i.card_id 
      WHERE c.set_id = $1
      ORDER BY c.id, i.url;
  `

  try {
    const conn: Pool = await getPoolConn();
    result = await conn.query(qry, [id])
  } catch (e: any) {
    console.log(e.message)
    return null
  }

  return result.rows

}
