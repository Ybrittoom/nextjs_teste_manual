'use server'
import { pool } from "../db"
export async function addPneu(
    marca: string,
    modelo: string,
    largura: number,
    raio: number,
    especura: number,
    carga_maxima: number
) {
    await pool.query(
        `insert into pneu (
            marca,
            modelo,
            largura,
            raio,
            especura,
            carga_maxima
        ) values (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6
        )`,
        [
            marca,
            modelo,
            largura,
            raio,
            especura,
            carga_maxima
        ]
    )
}