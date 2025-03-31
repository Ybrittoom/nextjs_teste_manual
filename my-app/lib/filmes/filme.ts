'use server'
import { pool } from "../db"
export async function addFilme(
    nome: string,
    diretor: string,
    assunto: string,
    classificacao_etaria: string
) {
    await pool.query(
        `insert into filme (
            nome,
            diretor,
            assunto,
            classificacao_etaria 
        ) values (
            $1,
            $2,
            $3,
            $4
        )`,
        [
            nome,
            diretor,
            assunto,
            classificacao_etaria
        ]
    )
}

export async function getFilmes() {
    return (await pool.query(`select * from filme`)).rows
}

export async function removeFilme(id: number) {
    await pool.query(`delete from filme where id = $1`, [id]);
} 

export async function updateFilme(
    id: number,
    nome: string,
    diretor: string,
    assunto: string,
    classificacao_etaria: string
) {
    await pool.query(
        `update filme set 
            nome = $2,
            diretor = $3,
            assunto = $4,
            classificacao_etaria = $5
        where id = $1`,
        [
            id,
            nome,
            diretor,
            assunto,
            classificacao_etaria
        ]
    );
}
