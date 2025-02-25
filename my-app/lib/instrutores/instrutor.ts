'use server'
import { pool } from "../db"
export async function addInstrutor(nome: string, especialidade: string, data_de_nascimento: string, endereco: string, comum: string) {
    await pool.query(`insert into instrutor(nome, especialidade, data_de_nascimento, endereco, comum) values ('${nome}', '${especialidade}', '${data_de_nascimento}', '${endereco}', '${comum}')`)
}