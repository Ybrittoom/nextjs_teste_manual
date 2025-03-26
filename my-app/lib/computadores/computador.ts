'use server'
import { pool } from "../db"
export async function addComputador(
    descricao: string,
    cpu: string,
    memoria: string,
    placa_video: string,
    placa_mae: string,
    fonte: string,
    armazenamento: string
) {
    await pool.query(
        `insert into computador (
            descricao,
            cpu,
            memoria,
            placa_video,
            placa_mae,
            fonte,
            armazenamento
        ) values (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7
        )`,
        [
            descricao,
            cpu,
            memoria,
            placa_video,
            placa_mae,
            fonte,
            armazenamento
        ]
    )
}

export async function getComputadores() {
    return (await pool.query(`select * from computador`)).rows
}

export async function removeComputador(id: number) {
    await pool.query(`delete from computador where id = $1`, [id]);
}

export async function updateComputador(
    id: number,
    descricao: string,
    cpu: string,
    memoria: string,
    placa_video: string,
    placa_mae: string,
    fonte: string,
    armazenamento: string
) {
    await pool.query(
        `update computador set
            descricao = $2,
            cpu = $3,
            memoria = $4,
            placa_video = $5,
            placa_mae = $6,
            fonte = $7,
            armazenamento = $8
        where id = $1`,
        [
            id,
            descricao,
            cpu,
            memoria,
            placa_video,
            placa_mae,
            fonte,
            armazenamento
        ]
    );
}

