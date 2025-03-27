'use server'
import { pool } from "@/lib/db"
export async function addEscola(
    nome: string,
    endereco: string,
    quantidade_de_alunos: number,
    telefone: string
) {
    await pool.query(
        `insert into escola (
            nome,
            endereco,
            quantidade_de_alunos,
            telefone
        ) values (
            $1,
            $2,
            $3,
            $4
        )`,
        [
            nome,
            endereco,
            quantidade_de_alunos, 
            telefone
        ]
    )
}

export async function getEscolas() {
    return (await pool.query(`select * from escola`)).rows
}

export async function removeEscola(id: number) {
    await pool.query(`delete from escola where id = $1`, [id]);
}

export async function updateEscolas(
    id: number,
    nome: string,
    endereco: string,
    quantidade_de_alunos: number, 
    telefone: string
) {
    await pool.query(
        `update escola set
            nome = $1,
            endereco = $2,
            quantidade_de_alunos = $3,
            telefone = $4
        where id = $5`,
        [
            nome,
            endereco,
            quantidade_de_alunos,
            telefone,
            id
        ]
    );
}
