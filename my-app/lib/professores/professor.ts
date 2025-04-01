'use server'
import { pool } from "../db"
export async function addProfessor(
    nome: string,
    endereco: string,
    especialidade: string,
    telefone: string,
    email: string
) {
    await pool.query(
        `insert into professor (
            nome,
            endereco,
            especialidade,
            telefone,
            email
        ) values (
            $1,
            $2,
            $3,
            $4,
            $5
        )`,
        [
            nome,
            endereco,
            especialidade,
            telefone,
            email
        ]
    )
}

export async function getProfessores() {
    return (await pool.query(`select * from professor`)).rows
}

export async function removeProfessor(id: number) {
    await pool.query(`delete from professor where id = $1`, [id]);
}

export async function updateProfessor(
    id: number,
    nome: string,
    endereco: string,
    especialidade: string,
    telefone: string,
    email: string
) {
    await pool.query(
        `update professor set
            nome = $1,
            endereco = $2,
            especialidade = $3,
            telefone = $4,
            email = $5
        where id = $6`,
        [
            nome,
            endereco,
            especialidade,
            telefone,
            email,
            id
        ]
    )
}