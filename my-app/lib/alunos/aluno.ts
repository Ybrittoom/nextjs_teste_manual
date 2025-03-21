'use server'
import { pool } from "../db"
export async function addAluno(
    nome: string,
    nome_do_pai: string,
    nome_da_mae: string,
    data_de_nascimento: Date,
    cor_da_pele: string
) {
    await pool.query(
        `insert into aluno (
        nome,
        nome_do_pai,
        nome_da_mae,
        data_de_nascimento,
        cor_da_pele
        ) values (
            $1,
            $2,
            $3,
            $4,
            $5
        )`,
        [
            nome,
            nome_do_pai,
            nome_da_mae,
            data_de_nascimento,
            cor_da_pele
        ]
    )
}

export async function getAluno() {
    return (await pool.query(`select * from aluno`)).rows
}

export async function updateAluno(
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

export async function removeAluno(
    id: number
) {
    await pool.query(`delete from hino where id = ${id}`)
}