'use server'
import { pool } from "@/lib/db"
export async function addCliente(
    nome: string,
    endereco: string,
    data_de_nascimento: Date,
    numero_de_telefone: string,
    email: string,
    cpf: string
) {
    await pool.query(
        `insert into cliente (
        nome,
        endereco,
        data_de_nascimento ,
        numero_de_telefone,
        email,
        cpf 
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
            cpf
        ]
    )
}

export async function getClientes() {
    return (await pool.query(`select * from cliente`)).rows
}

export async function removeCliente(id: number) {
    await pool.query(`delete from cliente where id = $1`, [id]);
}

export async function updateCliente(
    id: number,
    nome: string,
    endereco: string,
    data_de_nascimento: Date,
    numero_de_telefone: string,
    email: string,
    cpf: string
) {
    await pool.query(
        `update cliente set
            nome = $1,
            endereco = $2,
            data_de_nascimento = $3,
            numero_de_telefone = $4,
            email = $5,
            cpf = $6
        where id = $7`,
        [
            nome,
            endereco,
            data_de_nascimento,
            numero_de_telefone,
            email,
            cpf,
            id
        ]
    );
}
