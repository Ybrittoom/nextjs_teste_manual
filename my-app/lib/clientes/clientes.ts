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
    CPF: string
) {
    await pool.query(
        `update produto set
            nome = '$1',
            endereco = '$2',
            data_de_nascimento = '$3',
            numero_de_telefone = '$4',
            email = '$5',
            CPF = '$6'
        where id = $7`,
        [
            id,
            nome,
            endereco,
            data_de_nascimento,
            numero_de_telefone,
            email,
            CPF
        ]
    );
}
