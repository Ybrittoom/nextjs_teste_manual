'use server'
import { pool } from "../db"
export async function addInstrutores(
       nome: string, 
       especialidade: string,
       data_nascimento: string,
       endereco: string,
       comum: string
    
    ) {
    await pool.query(
            `insert into instrutores(
                nome,
                especialidade,
                data_nascimento,
                endereco,
                comum
        ) values (
            $1,
            $2,
            $3,
            $4,
            $5
        )`,
        [
            nome,
            especialidade,
            data_nascimento,
            endereco,
            comum
        ]
        );
}

        export async function getInstrutores() {
            return (await pool.query (`select from instrutor`)).rows

        }

        export async function updateInstrutores(
            id: number,
            nome: string,
            especialidade: string,
            data_nascimento: string,
            endereco: string,
            comum: string = ''
        ) {
            await pool.query(
                `UPDATE instrutor
                    nome = '${nome}',
                    especialidade = '${especialidade}',
                    data_nascimento = '${data_nascimento}',
                    endereco = '${endereco}',
                    comum = '${comum}'
                WHERE id = ${id}`,
                [nome, especialidade, data_nascimento, endereco, comum, id]
            );
        }
        

        export async function removeInstrutor (id: number){
            await pool.query (`delete from instrutor where id ${id}`);
        }