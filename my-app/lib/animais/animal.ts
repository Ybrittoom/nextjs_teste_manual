'use server'
import { pool } from "../db"
export async function addAnimal(
    nome: string,
    nome_cientifico: string,
    especie: string,
    grupo: string
) {
    await pool.query(
        `insert into animais (
        nome,
        nome_cientifico,
        especie,
        grupo
        ) values (
            $1,
            $2,
            $3,
            $4
        )`,
        [
            nome,
            nome_cientifico,
            especie,
            grupo
        ]
    )
}

export async function getAnimais() {
    return (await pool.query(`select * from animais`)).rows
}

export async function updateAnimal(
    id: number,
    nome: string,
    nome_cientifico: string,
    especie: string,
    grupo: string
) {
    await pool.query(
        `update animais set
            nome = '${nome}',
            nome_cientifico = '${nome_cientifico}',
            especie = '${especie}',
            grupo = '${grupo}'
        where id = ${id}`
    )
}

export async function removeAnimal(
    id: number
) {
    await pool.query(`delete from animais where id = ${id}`)
}