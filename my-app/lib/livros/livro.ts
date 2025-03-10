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
