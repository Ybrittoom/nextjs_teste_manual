'use server'
import { pool } from "../db"
export async function addInstrumento(
    nome: string,
    tipo: string
) {
    await pool.query(
        `insert into instrumento (
            nome,
            tipo
        ) values (
            $1,
            $2
        )`,
        [
            nome,
            tipo
        ]
    )
}

export async function getInstrumentos() {
    const result = await pool.query(
        `select * from instrumento`
    )
    return result.rows
}

export async function removeInstrumento(id: number) {
    await pool.query(
        `delete from instrumento where id = $1`,
        [id]
    )
}   

export async function updateInstrumento(
    id: number,
    nome: string,
    tipo: string
) {
    await pool.query(
        `update instrumento set nome = $1, tipo = $2 where id = $3`,
        [
            nome,
            tipo,
            id
        ]
    )
}
