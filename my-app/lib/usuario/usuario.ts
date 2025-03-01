'use server'
import { pool } from "../db"
export async function addUser(nome: string, apelido: string, email: string, senha: string) {
    await pool.query(`insert into usuario (nome, apelido, email, senha) values ('${nome}', '${apelido}', '${email}', '${senha}')`)
}