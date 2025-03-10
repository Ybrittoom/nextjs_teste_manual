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