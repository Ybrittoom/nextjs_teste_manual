'use server'
import { pool } from "../db"
export async function addAluno(
    nome: string,
    nome_do_pai: string,
    nome_da_mae: string,
    data_de_nascimento: string,
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
    nome: string,
    nome_do_pai: string,
    nome_da_mae: string,
    data_de_nascimento: string, // Mantenha como string por enquanto
    cor_da_pele: string
) {
    await pool.query(
        `UPDATE aluno SET
            nome = $2,
            nome_do_pai = $3,
            nome_da_mae = $4,
            data_de_nascimento = $5,
            cor_da_pele = $6
        WHERE id = $1`,
        [id, nome, nome_do_pai, nome_da_mae, data_de_nascimento, cor_da_pele]
    );
}


export async function removeAluno(
    id: number
) {
    await pool.query(`delete from aluno where id = ${id}`)
}