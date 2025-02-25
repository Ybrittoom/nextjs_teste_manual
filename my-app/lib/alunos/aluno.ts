'use server'
import { pool } from "../db"
export async function addAluno(nome: string , nome_do_pai: string , nome_da_mae: string , data_de_nascimento: string , cor_da_pela: string) {
    await pool.query(`insert into aluno (nome , nome_do_pai , nome_da_mae, data_de_nascimento , cor_da_pela) values (${nome}, ${nome_do_pai}, ${nome_da_mae}, ${data_de_nascimento}, ${cor_da_pela})`)
}