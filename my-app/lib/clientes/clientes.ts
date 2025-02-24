'use server'
import { pool } from "@/lib/db"
export async function addCliente(nome: string, endereco: string, nascimento: string, telefone: string, email: string, CPF: string) {
    await pool.query(`insert into cliente (nome, endereco, data_de_nascimento , numero_de_telefone, email, CPF ) values ('${nome}', '${endereco}', '${nascimento}', ${telefone}, '${email}', '${CPF}')`)
}