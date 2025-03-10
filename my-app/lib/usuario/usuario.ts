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