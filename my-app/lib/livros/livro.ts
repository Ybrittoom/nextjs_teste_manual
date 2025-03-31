'use server'
import { pool } from "@/lib/db"
export async function addLivro(nome: string,
	autor: string,
	assunto: string,
	resumo: string,
	data_de_lancamento: Date,
	preco_sugerido: number
) {
	await pool.query(
		`insert into Livro (
			nome,
			autor,
			assunto,
			resumo,
			data_de_lancamento,
			preco_sugerido
		) values (
			$1,
			$2,
			$3,
			$4,
			$5,
			$6
		)`,
		[
			nome,
			autor,
			assunto,
			resumo,
			data_de_lancamento,
			preco_sugerido
		]
	)
}

export async function getLivros() {
	return (await pool.query(`select * from Livro`)).rows
}

export async function removeLivro(id: number) {
	await pool.query(`delete from Livro where id = $1`, [id])
}

export async function updateLivro(
    id: number,
    nome: string,
    autor: string,
    assunto: string,
    resumo: string,
    data_de_lancamento: Date,
    preco_sugerido: number
) {
    await pool.query(
        `update livro set
            nome = $1,
            autor = $2,
            assunto = $3,
            resumo = $4,
            data_de_lancamento = $5,
            preco_sugerido = $6
        where id = $7`,
        [
            nome,
            autor,
            assunto,
            resumo,
            data_de_lancamento,
            preco_sugerido,
            id
        ]
    );
}