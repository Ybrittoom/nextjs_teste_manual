'use server'
import { pool } from "../db"
export async function addInstrutor(
    nome: string,
    especialidade: string,
    data_de_nascimento: Date,
    endereco: string,
    comum: string
) {
    await pool.query(
        `insert into instrutor(
            nome,
            especialidade,
            data_de_nascimento,
            endereco,
            comum
        ) values (
            $1,
            $2,
            $3,
            $4,
            $5
        )`,
        [
            nome,
            especialidade,
            data_de_nascimento,
            endereco,
            comum
        ]
    )
}