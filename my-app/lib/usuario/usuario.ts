'use server'
import { pool } from "../db"
export async function addUser(
    nome: string,
    apelido: string,
    email: string,
    senha: string
) {
    await pool.query(
        `insert into usuario (
            nome,
            apelido,
            email,
            senha
        ) values (
            $1,
            $2,
            $3,
            $4
        )`, 
        [
            nome,
            apelido,
            email,
            senha
        ]
    )
}

export async function getUsuarios() {
    return (await pool.query(`select * from usuario`)).rows
}

export async function removeUsuario(id: number) {
    await pool.query(`delete from usuario where id = $1`, [id])
}

export async function updateUsuarios(
    id: number,
    nome: string,
    apelido: string,
    email: string,
    senha: string
) {
    await pool.query(
        `update usuario set
            nome = $1,
            apelido = $2,
            email = $3,
            senha = $4
        where id = $5`,
        [
            nome,
            apelido,
            email,
            senha,
            id
        ]
    )
}
