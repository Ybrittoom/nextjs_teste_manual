'use server'
import { pool } from "@/lib/db"
export async function addProduto(
    nome: string,
    valor_unitario: number,
    validade: Date,
    descricao: string
) {
    await pool.query(
        `insert into produto (
            nome,
            valor_unitario,
            validade,
            descricao 
        ) values (
            $1,
            $2,
            $3,
            $4
        )`,
        [
            nome,
            valor_unitario,
            validade,
            descricao
        ]
    )
}