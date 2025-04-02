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

export async function getCasas() {
    return (await pool.query(`select * from casa`)).rows
}

export async function removeCasa(id: number) {
    await pool.query(`delete from casa where id = $1`, [id]);
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
    await pool.query(
        `update casa set
            tipo = $1,
            endereco = $2,
            areaterreno = $3,
            areaconstruida = $4,
            quartos = $5,
            banheiros = $6,
            edicula = $7,
            churrasqueira = $8,
            piscina = $9,
            valorcondominio = $10,
            precovenda = $11
        where id = $12`,
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
            precovenda,
            id
        ]
    );
}

