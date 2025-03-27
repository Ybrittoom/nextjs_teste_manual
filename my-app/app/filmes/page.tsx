'use client'

import { useEffect, useState } from "react"
import { addFilme } from "@/lib/filmes/filme"


interface Filme {
    nome: string
    diretor: string
    assunto: string
    classificacao_etaria: string
    id: number
}


export default function Page() {
    const [nome, setNome] = useState('nome')
    const [diretor, setDiretor] = useState('diretor')    
    const [assunto, setAssunto] = useState('assunto')    
    const [classificacao_etaria, setClassificacao_etaria] = useState('classificacao etaria') 
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [filmes, setFilmes] = useState<Filme[]>([])

    const fetchFilmes = async () => {
        try {
            const data = await getFilmes()
            setFilmes(data)
        } catch (error) {
            console.error('Erro fetching filmes:', error)
        }
    }

    useEffect(() => {
        fetchFilmes()
    }, [])

    const handleEdit = ({
        id,
        nome,
        diretor,
        assunto,
        classificacao_etaria,

    }: Filme) => {
        setId(id)
        setNome(nome)
        setDiretor(diretor)
        setAssunto(assunto)
        setClassificacao_etaria(classificacao_etaria)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Filme) => {
            await removeFilme(id)
            fetchFilmes()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addFilme(
                    nome,
                    diretor,
                    assunto,
                    classificacao_etaria
                )
            else 
                await updateFilme(
                    id,
                    diretor,
                    assunto,
                    classificacao_etaria
                )

            fetchFilmes()
            closeModal()
        } catch (error) {
            console.error(' Erro adding filme:', error)
        }
    }


    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Filmes</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id: 0,
                    nome: '',
                    diretor: '',
                    assunto: '',
                    classificacao_etaria: '',
                })}
                className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar novo Filme
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Diretor</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filmes.map((filme) => (
                            <tr
                            key={filme.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{filme.nome}</td>
                                <td className="border px-4 py-2">{filme.diretor}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(filme)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(filme)}
                                    >
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500  bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-base font-semibold text-gray-900 md-4">
                            Novo Filme
                        </h2>

                        <form onSubmit={handleSubmit}>
                            
                        </form>

                    </div>
                </div>
            )}

        </div>
    )
}