'use server'
import { pool } from "../db"
export async function addCasa(
    tipo: string, 
    endereco: string, 
    areaterreno: number, 
    areaconstruida: number, 
    quartos: number, 
    banheiros: number, 
    edicula: boolean, 
    churrasqueira: boolean, 
    piscina: boolean, 
    valorcondominio: number, 
    precovenda: number
) {
    await pool.query(`insert into casa (
        tipo, 
        endereco, 
        areaterreno, 
        areaconstruida, 
        quartos, 
        banheiros, 
        edicula, 
        churrasqueira, 
        piscina, 
        valorcondominio, 
        precovenda
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
        tipo,
        endereco,
        areaterreno,
        areaconstruida,
        quartos,
        banheiros,
        edicula,
        churrasqueira,
        piscina,
        valorcondominio,
        precovenda
    ]    
)
} 

export async function getCasa() {
    return (await pool.query(`select * from casa`)).rows
}

export async function updateCasa(
    id: number,
    tipo: string,
    endereco: string,
    areaterreno: number,
    areaconstruida: number,
    quartos: number,
    banheiros: number,
    edicula: boolean,
    churrasqueira: boolean,
    piscina: boolean,
    valorcondominio: number,
    precovenda: number

) {
    pool.query(
        `update casa set
            nome = $1,
            nome_cientifico = $2,
            especie = $3,
            grupo = $4
        where id = $5`,
        [
            tipo,
            endereco,
            areaterreno,
            areaconstruida,
            quartos,
            banheiros,
            edicula,
            churrasqueira,
            piscina,
            valorcondominio,
            precovenda
        ]
    )
}

export async function removeCasa(
    id: number
) {
    await pool.query(`delete from casa where id = ${id}`)
}

