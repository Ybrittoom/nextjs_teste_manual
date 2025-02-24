'use server'
import { pool } from "@/lib/db"
export async function addCliente(nome: string, endereco: string, nascimento: string, telefone: number, email: string, CPF: number) {
    await pool.query(`insert into cliente (nome, endereco, nascimento, telefone, email, CPF ) values ('${nome}', '${endereco}', '${nascimento}', ${telefone}, '${email}', '${CPF}')`)
}