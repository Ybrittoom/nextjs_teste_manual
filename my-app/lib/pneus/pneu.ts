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

export async function getPneus() {
    return (await pool.query(`select * from pneu`)).rows
}

export async function removePneu(id: number) {
    await pool.query(`delete from pneu where id = $1`, [id]);
}

export async function updatePneu(
    id: number,
    marca: string,
    modelo: string,
    largura: number,
    raio: number,
    especura: number,
    carga_maxima: number
) {
    await pool.query(
        `update pneu set
            marca = $1,
            modelo = $2,
            largura = $3,
            raio = $4,
            especura = $5,
            carga_maxima = $6
        where id = $7`,
        [
            marca,
            modelo,
            largura,
            raio,
            especura,
            carga_maxima,
            id
        ]
    );
}

