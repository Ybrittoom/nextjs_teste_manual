'use client'

import { addProduto, getProdutos, removeProduto, updateProdutos } from "@/lib/produtos/produtos"
import { useEffect, useState } from "react"

export default function Page() {
    const [ nome, setNome] =  useState('nome produto')
    const [ valorUnitario, setValorUnitario] = useState(0)
    const [ validade, setValidade] = useState('') 
    const [descricao, setDescricao] = useState('Descriçao')
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [produtos, setProdutos] = useState<Produto[]>([])

    const fetchProdutos = async () => {
        try {
            const data = await getProdutos()
            setProdutos(data)
        } catch (error) {
            console.error('Erro fetching produto', error)
        }
    }

    useEffect(() => {
        fetchProdutos()
    }, [])

    const handleEdit = ({
        id,
        nome,
        valorUnitario,
        validade,
        descricao

    }: Produto) => {
        setId(id)
        setNome(nome)
        setValorUnitario(valorUnitario)
        setValidade(validade)
        setDescricao(descricao)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
        id
    }: Produto) => {
        await removeProduto(id)
        fetchProdutos()
    }
    
    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addProduto(
                    nome,
                    valorUnitario,
                    validade,
                    descricao
                )
            else 
                await updateProdutos(
                    id, 
                    nome,
                    valorUnitario,
                    validade,
                    descricao
                )
            fetchProdutos()
            closeModal()
        } catch (error) {
            console.error(' Erro adding produto:', error)
        }
    }


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro de Produtos</h1>

            <div className="mb-4">
                <button
                    onClick={() => handleEdit({
                        id: 0,
                        nome: '',
                        valorUnitario: 0,
                        validade: '',
                        descricao: ''
                    })}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Adicionar novo produto
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Valor Unitario</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr 
                            key={produto.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{produto.nome}</td>
                                <td className="border px-4 py-2">{produto.valorUnitario}</td>
                                <td className="border px-4 py-2">
                                    <button 
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(produto)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(produto)}
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
                        <h2 className="text-base font-semibold text-gray-900 md-4">
                            Novo Produto
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <div>
                                        <label htmlFor="nome"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            nome
                                        </label>
                                        <div className="mt-1">
                                            <input type="text" 
                                            value={nome}
                                            onChange={(event) => setNome(event.target.value)}
                                            id="nome"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="valor_unitario"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Valor Unitario
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={valorUnitario}
                                            onChange={(event) => setValorUnitario(event.target.value)}
                                            id="valor_unitario"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="validade"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Validade
                                        </label>
                                        <div className="mt-1">
                                            <input type="date" 
                                            value={validade}
                                            onChange={(event) => setValidade(event.target.value)}
                                            id="validade"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="descricao"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Descriçao
                                        </label>
                                        <div className="mt-1">
                                            <input type="text" 
                                            value={descricao}
                                            onChange={(event) => setDescricao(event.target.value)}
                                            id="descricao"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required
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