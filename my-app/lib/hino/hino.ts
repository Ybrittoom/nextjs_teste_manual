'use server'
import { pool } from "../db"
export async function addHino(
    titulo: string,
    numero: number,
    letra: string
) {
    await pool.query(
        `insert into hino (
            titulo,
            numero,
            letra
        ) values (
            $1,
            $2,
            $3
        )`,
        [
            titulo,
            numero,
            letra
        ]
    )
}