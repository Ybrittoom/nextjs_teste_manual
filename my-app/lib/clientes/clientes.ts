'use server'
import { pool } from "@/lib/db"
export async function addCliente(
    nome: string,
    endereco: string,
    data_de_nascimento: Date,
    numero_de_telefone: number,
    email: string,
    CPF: string
) {
    await pool.query(
        `insert into cliente (
        nome,
        endereco,
        data_de_nascimento ,
        numero_de_telefone,
        email,
        CPF 
        ) values (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6 
        )`,
        [
            nome,
            endereco,
            data_de_nascimento,
            numero_de_telefone,
            email,
            CPF
        ]
    )
}