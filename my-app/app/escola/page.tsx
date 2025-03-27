'use client'


import { useEffect, useState } from "react"
import { addEscola, getEscolas, updateEscolas, removeEscola } from "@/lib/escolas/escola"

interface Escola {
    id: number
    nome: string;
    endereco: string
    quantidadeAlunos: number 
    telefone: string
}

export default function Page() {
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [quantidadeAlunos, setQuantidadeAlunos] = useState(0) 
    const [telefone, setTelefone] = useState('numero de telefone')
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [escolas, setEscolas] = useState<Escola[]>([])

    const fetchEscolas = async () => {
        try {
            const data = await getEscolas()
            setEscolas(data)
        } catch (error) {
            console.error('Erro fetching escolas', error)
        }
    }

    useEffect(() => {
        fetchEscolas()
    }, [])

    const handleEdit = ({
        id,
        nome,
        quantidadeAlunos,
        telefone

    }: Escola) => {
        setId(id)
        setNome(nome || '')
        setEndereco(endereco || '')
        setQuantidadeAlunos(quantidadeAlunos || 0)
        setTelefone(telefone || '')
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Escola) => {
            await removeEscola(id)
            fetchEscolas()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addEscola(
                    nome,
                    endereco,
                    quantidadeAlunos,
                    telefone
                )
            else 
                await updateEscolas(
                    id,
                    endereco,
                    quantidadeAlunos,
                    telefone
                )

            fetchEscolas()
            closeModal()
        } catch (error) {
            console.error(' Erro adding escola:', error)
        }
    }

    return (
        <div className="conatiner mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro de Escola</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id: 0,
                    nome: '',
                    endereco: '',
                    quantidadeAlunos: 0,
                    telefone: ''
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar nova Escola
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Endereço</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {escolas.map((escola) => (
                            <tr
                            key={escola.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="borde px-4 py-2">{escola.nome}</td>
                                <td className="borde px-4 py-2">{escola.endereco}</td>
                                <td className="borde px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(escola)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(escola)}
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
                <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500  bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-base font-semibold text-gray-900 mb-4">
                            Nova Escola
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
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
                                        required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        endereço
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text"
                                        name="endereco" 
                                        id="endereco" 
                                        value={endereco}
                                        onChange={(event) => setEndereco(event.target.value)}
                                        required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        quantidade de Alunos
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text"
                                        name="quantidadeAlunos" 
                                        id="quantidadeAlunos" 
                                        value={quantidadeAlunos}
                                        onChange={(event) => setQuantidadeAlunos(event.target.value)}
                                        required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        telefone
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text"
                                        name="telefone" 
                                        id="telefone" 
                                        value={telefone}
                                        onChange={(event) => setTelefone(event.target.value)}
                                        required
                                        />
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
