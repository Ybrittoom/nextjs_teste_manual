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