'use server'
import { pool } from "@/lib/db"
export async function addProduto(nome: string, valor_unitario: number, validade: string, descricao: string) {
    await pool.query(`insert into produto (nome, valor_unitario, validade, descricao ) values ('${nome}', ${valor_unitario}, '${validade}', '${descricao}')`)
}