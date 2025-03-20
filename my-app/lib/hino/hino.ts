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

export async function getHinos() {
    return (await pool.query(`select * from hino`)).rows
}

export async function updateHino(
    id: number,
    titulo: string,
    numero: number,
    letra: string
) {
    await pool.query(
        `update hino set 
            titulo = '${titulo}',
            letra = '${letra}',
            numero = ${numero}
        where id = ${id}`
    )
}

export async function removeHino(
    id: number
) {
    await pool.query(`delete from hino where id = ${id}`)
}