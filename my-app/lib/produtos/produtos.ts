'use server'
import { pool } from "@/lib/db"
export async function addProduto(nome: string, valorUnitario: string, validade: string, descricao: string) {
    await pool.query(`insert into produtos(description) values ('${nome, valorUnitario, validade, descricao})`)
}