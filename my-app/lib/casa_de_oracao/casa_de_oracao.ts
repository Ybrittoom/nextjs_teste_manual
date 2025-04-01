'use server'
import { pool } from "../db"
export async function addCasaOracao(
    nome: string,
    endereco: string,
    anciao: string,
    telefone_anciao: number,
    cooperador: string,
    telefone_cooperador: number,
    cooperador_de_jovens: string,
    telefone_cooperador_de_jovens: number,
    diacono: string,
    telefone_diacono: number,
    numero_da_ultima_santa_ceia: number
) {
    await pool.query(
        `insert into casa_de_oracao (
        nome,
        endereco,
        anciao,
        telefone_anciao,
        cooperador,
        telefone_cooperador,
        cooperador_de_jovens,
        telefone_cooperador_de_jovens,
        diacono,
        telefone_diacono,
        numero_da_ultima_santa_ceia
        ) values (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11
        )`,
        [
            nome,
            endereco,
            anciao,
            telefone_anciao,
            cooperador,
            telefone_cooperador,
            cooperador_de_jovens,
            telefone_cooperador_de_jovens,
            diacono,
            telefone_diacono,
            numero_da_ultima_santa_ceia
        ]
    )
}

export async function getCasas_de_oracao() {
    return (await pool.query(`select * from casa_de_oracao`)).rows
}

export async function removeComum(id: number) {
    await pool.query(`delete from casa_de_oracao where id = $1`, [id])
}

export async function updateComum(
    id: number,
    nome: string,
    endereco: string,
    anciao: string,
    telefone_anciao: number,
    cooperador: string,
    telefone_cooperador: number,
    cooperador_de_jovens: string,
    telefone_cooperador_de_jovens: number,
    diacono: string,
    telefone_diacono: number,
    numero_da_ultima_santa_ceia: number
) {
    await pool.query(
        `update casa_de_oracao set 
            nome = $2,
            endereco = $3,
            anciao = $4,
            telefone_anciao = $5,
            cooperador = $6,
            telefone_cooperador = $7,
            cooperador_de_jovens = $8,
            telefone_cooperador_de_jovens = $9,
            diacono = $10,
            telefone_diacono = $11,
            numero_da_ultima_santa_ceia = $12
        where id = $1`,
        [
            id,
            nome,
            endereco,
            anciao,
            telefone_anciao,
            cooperador,
            telefone_cooperador,
            cooperador_de_jovens,
            telefone_cooperador_de_jovens,
            diacono,
            telefone_diacono,
            numero_da_ultima_santa_ceia
        ]
    )
}