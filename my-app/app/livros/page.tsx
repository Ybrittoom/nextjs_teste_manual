'use client'

import { addLivro, getLivros, removeLivro, updateLivro } from "@/lib/livros/livro"
import { useEffect, useState } from "react"

interface Livro {
    id: number;
    nome: string;
    autor: string;
    assunto: string;
    resumo: string;
    data_de_lancamento: string;
    preco_sugerido: number;
}


export default function Page() {
    const [nome, setNome] = useState('nome')
    const [autor, setAutor] = useState('autor')
    const [assunto, setAssunto] = useState('assunto')
    const [resumo, setResumo] = useState('resumo')
    const [data_de_lancamento, setData_de_lancamento] = useState('data de lançamento')
    const [preco_sugerido, setPreco_sugerido] = useState(0)  
    const [id, setId] = useState(0)
    const [livros, setLivros] = useState<Livro[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const fetchLIvro = async () => {
        try {
            const data = await getLivros()
            data.map((livro) => {
                livro.data_de_lancamento = livro.data_de_lancamento?.toISOString().split('T')[0] || '';
            })
            setLivros(data)
        } catch (error) {
            console.error('Erro fetching livro', error)
        }
    }

    useEffect(() => {
        fetchLIvro()
    }, [])

    const handleEdit = ({
        id,
        nome, 
        autor,
        assunto,
        resumo,
        data_de_lancamento,
        preco_sugerido

    }: Livro) => {
        setId(id)
        setNome(nome)
        setAutor(autor)
        setAssunto(assunto)
        setResumo(resumo)
        setData_de_lancamento(data_de_lancamento)
        setPreco_sugerido(preco_sugerido)
        setIsModalOpen(true)
        
    }

    const handleRemove = async ({
            id
        }: Livro) => {
            await removeLivro(id)
            fetchLIvro()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addLivro(
                    nome,
                    autor,
                    assunto,
                    resumo,
                    data_de_lancamento,
                    preco_sugerido
                )
            else 
                await updateLivro(
                    id,
                    nome,
                    autor,
                    assunto,
                    resumo,
                    data_de_lancamento,
                    preco_sugerido
                )

            fetchLIvro()
            closeModal()
        } catch (error) {
            console.error(' Erro adding livro:', error)
        }
    }
    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Livros</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id: 0,
                    nome: '',
                    autor: '',
                    assunto: '',
                    resumo: '',
                    data_de_lancamento: '',
                    preco_sugerido: 0
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs"
                >
                    Adicionar novo livro
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Autor</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <tr
                            key={livro.id}
                            className="hover:bg-gray-100 cursor-pointter">
                                <td className="border px-4 py-2">{livro.nome}</td>
                                <td className="border px-4 py-2">{livro.autor}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs"
                                    onClick={ () => handleEdit(livro)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs"
                                    onClick={ () => handleRemove(livro)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md">
                        <h2>
                            Novo Livro
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-700"
                                        >
                                            Nome
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text" 
                                            name="nome" 
                                            id="nome" 
                                            value={nome}
                                            onChange={(event) => setNome(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-700"
                                        >
                                            Autor
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text" 
                                            name="autor" 
                                            id="autor" 
                                            value={autor}
                                            onChange={(event) => setAutor(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-700"
                                        >
                                            assunto
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text" 
                                            name="assunto" 
                                            id="assunto" 
                                            value={assunto}
                                            onChange={(event) => setAssunto(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-700"
                                        >
                                            resumo
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text" 
                                            name="resumo" 
                                            id="resumo" 
                                            value={resumo}
                                            onChange={(event) => setResumo(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-700"
                                        >
                                            data_de_lançamemto
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="date" 
                                            name="data_de_lançamemto" 
                                            id="data_de_lançamemto" 
                                            value={data_de_lancamento}
                                            onChange={(event) => setData_de_lancamento(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-700"
                                        >
                                            preco sugerido
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text" 
                                            name="preco_sugerido" 
                                            id="preco_sugerido" 
                                            value={preco_sugerido}
                                            onChange={(event) => setPreco_sugerido(Number(event.target.value))}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button
                                type="button"
                                className="text-sm font-semibold text-gray-900"
                                onClick={closeModal}
                                >
                                    Cancelar
                                </button>
                                <button
                                type="submit"
                                className="text-sm font-semibold text-gray-900"
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}