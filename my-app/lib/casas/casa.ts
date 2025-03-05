'use server'
import { pool } from "../db"
export async function addCasa(
    tipo: string, 
    endereco: string, 
    areaterreno: number, 
    areaconstruida: number, 
    quartos: number, 
    banheiros: number, 
    edicula: string, 
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