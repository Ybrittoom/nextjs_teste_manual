'use server'

import { pool } from "../db"
export async function addCarro(
    fabricante: string, 
    modelo: string, 
    ano_de_fabricaçao: number, 
    cor: string, 
    quilometros_rodados: number
) {
    await pool.query(`insert into carro( 
        fabricante, 
        modelo, 
        ano_de_fabricacao, 
        cor, 
        quilometros_rodados
    )   values (
        $1,
        $2,
        $3,
        $4,
        $5
    )`,
    [
        fabricante,
        modelo,
        ano_de_fabricaçao,
        cor,
        quilometros_rodados
    ])
}


export async function getCarros() {
    return (await pool.query(`select * from carro`)).rows
}

export async function updateCarro(
    id: number,
    fabricante: string,
    modelo: string,
    ano_de_fabricacao: number,
    cor: string,
    quilometros_rodados: number 
) {
    await pool.query(
        `UPDATE carro SET
            fabricante = $1,
            modelo = $2,
            ano_de_fabricacao = $3,
            cor = $4,
            quilometros_rodados = $5
        WHERE id = $6`,
        [
            fabricante,
            modelo,
            ano_de_fabricacao,
            cor,
            quilometros_rodados,
            id
        ]
    )
}

export async function removeCarro(
    id: number
) {
    await pool.query(`delete from carro where id = ${id}`)
}
