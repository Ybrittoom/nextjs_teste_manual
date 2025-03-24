'use server'

import { pool } from "../db"
export async function addCarro(
    fabricante: string, 
    modelo: string, 
    ano_de_fabricaçao: Date, 
    cor: string, 
    quilometros_rodados: number
) {
    await pool.query(`insert into carro( 
        fabricante, 
        modelo, 
        ano_de_fabricaçao, 
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
    Fabricante: string,
    modelo: string,
    ano_de_fabricacao: Date,
    cor: string,
    quilometros_rodado: number 
) {
    await pool.query(
        `update carro set
            Fabricante = '${Fabricante}',
            modelo = '${modelo}',
            ano_de_fabricacao = ${ano_de_fabricacao},
            cor = '${cor}',
            quilometros_rodado = ${quilometros_rodado}
        where id = ${id}`
    )
}

export async function removeCarro(
    id: number
) {
    await pool.query(`delete from carro where id = ${id}`)
}
