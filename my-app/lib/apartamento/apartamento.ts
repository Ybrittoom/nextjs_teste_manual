'use server'
import { pool } from "../db"
export async function addApartamento(
    tipo: string, 
    condominio: string, 
    area_privativa: number, 
    area_comum: number, 
    quantidade_de_quartos: number, 
    quantidade_de_banheiros: number, 
    tem_churrasqueira: boolean, 
    tem_piscina: boolean, 
    valor_do_condominio: number, 
    preco_de_venda: number
) {
    await pool.query(
        `insert into ape (
            tipo, 
            condominio, 
            area_privativa, 
            area_comum, 
            quantidade_de_quartos, 
            quantidade_de_banheiros, 
            tem_churrasqueira, 
            tem_piscina, 
            valor_do_condominio, 
            preco_de_venda
        )  values (
            $1, 
            $2, 
            $3, 
            $4, 
            $5, 
            $6, 
            $7, 
            $8, 
            $9, 
            $10
        )`,
        [
            tipo, 
            condominio, 
            area_privativa, 
            area_comum, 
            quantidade_de_quartos, 
            quantidade_de_banheiros, 
            tem_churrasqueira, 
            tem_piscina, 
            valor_do_condominio, 
            preco_de_venda
        ]
    )
}

export async function getApe() {
    return (await pool.query(`select * from ape`)).rows
}

export async function updateApe(
    id: number,
    tipo: string,
    condominio: string,
    area_privativa: number,
    area_comum: number,
    quantidade_de_quartos: number,
    quantidade_de_banheiros: number,
    tem_churrasqueira: boolean,
    tem_piscina: boolean,
    valor_do_condominio: number,
    preco_de_venda: number

) {
    await pool.query(
        `update ape set
            tipo = '${tipo}',
            condominio = '${condominio}',
            area_privativa = ${area_privativa},
            area_comum = ${area_comum},
            quantidade_de_quartos = ${quantidade_de_quartos},
            quantidade_de_banheiros = ${quantidade_de_banheiros},
            tem_churrasqueira = ${tem_churrasqueira},
            tem_piscina = ${tem_piscina},
            valor_do_condominio = ${valor_do_condominio},
            preco_de_venda = ${preco_de_venda}
        where id = ${id}`
    )
}

export async function removeApe(
    id: number
) {
    await pool.query(`delete from ape where id = ${id}`)
}

