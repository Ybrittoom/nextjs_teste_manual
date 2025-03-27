'use server'
import { pool } from "../db"
export async function addMateria(
    nome: string,
    descricao: string ,
    ano_letivo: string
) {
    await pool.query(
        `insert into materias(
            nome,
            descricao ,
            ano_letivo
        ) values (
            $1,
            $2,
            $3
        )`,
        [
            nome,
            descricao,
            ano_letivo
        ]
    )
}


export async function getMaterias() {
    return (await pool.query(`select * from materias`)).rows
}

export async function removeMateria(id: number) {
    await pool.query(`delete from materias where id = $1`, [id]);
}


export async function updateMateria(
    id: number,
    nome: string,
    descricao: string,
    ano_letivo: string
) {
    await pool.query(
        `update materias set
            nome = $1,
            descricao = $2,
            ano_letivo = $3
        where id = $4`,
        [
            nome,
            descricao,
            ano_letivo,
            id
        ]
    );
}