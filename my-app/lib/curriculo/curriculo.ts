'use server'
import { pool } from "../db"
export async function addCurriculo(
    nome: string,
    endereco: string,
    curriculo: string,
    habilidades: string
) {
    await pool.query(
        `insert into curriculo (
            nome,
            endereco,
            curriculo,
            habilidades
        ) values (
            $1,
            $2,
            $3,
            $4
        )`,
        [
            nome,
            endereco,
            curriculo,
            habilidades
        ]
    )
}

export async function getCurriculos() {
    return (await pool.query(`select * from curriculo`)).rows
}

export async function removeCurriculo(id: number) {
    await pool.query(`delete from curriculo where id = $1`, [id]);
}

export async function updateCurriculo(
    id: number,
    nome: string,
    endereco: string,
    curriculo: string,
    habilidades: string
) {
    await pool.query(
        `update curriculo set
            nome = $1,
            endereco = $2,
            curriculo = $3,
            habilidades = $4
        where id = $5`,
        [
            nome,
            endereco,
            curriculo,
            habilidades,
            id
        ]
    );
}

