'use client'

import { addProfessor, getProfessores, removeProfessor, updateProfessor } from "@/lib/professores/professor"
import { useEffect, useState } from "react"

interface Professor {
    id: number;
    nome: string;
    endereco: string;
    especialidade: string;
    telefone: string;
    email: string;
}


export default function ProfessoresPage() {
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [professores, setProfessores] = useState<Professor[]>([])
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const fetchProfessores = async () => {
        try {
            const data = await getProfessores()
            setProfessores(data)
        } catch (error) {
            console.error('Erro fetching professores', error)
        }
    }

    useEffect(() => {
        fetchProfessores()
    }, [])

    const handleEdit = ({
        id,
        nome,
        endereco,
        especialidade,
        telefone,
        email

    }: Professor) => {
        setId(id)
        setNome(nome)
        setEndereco(endereco)
        setEspecialidade(especialidade)
        setTelefone(telefone)
        setEmail(email)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Professor) => {
            await removeProfessor(id)
            fetchProfessores()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addProfessor(
                    nome,
                    endereco,
                    especialidade,
                    telefone,
                    email
                )
            else 
                await updateProfessor(
                    id,
                    nome,
                    endereco,
                    especialidade,
                    telefone,
                    email
                )

            fetchProfessores()
            closeModal()
        } catch (error) {
            console.error(' Erro adding professor:', error)
        }
    }
    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro de Professores</h1>

            <div className="mb-4">
                <button 
                onClick={() => handleEdit({
                    id: 0,
                    nome: '',
                    endereco: '',
                    especialidade: '',
                    telefone: '',
                    email
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs"
                >
                    Adicionar novo Professor
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Especialidade</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professores.map((professor) => (
                            <tr
                            key={professor.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{professor.nome}</td>
                                <td className="border px-4 py-2">{professor.especialidade}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(professor)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(professor)}
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
                            Novo Professor
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Nome
                                        </label>
                                        <div>
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

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            endereço
                                        </label>
                                        <div>
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

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            especialidade
                                        </label>
                                        <div>
                                            <input 
                                            type="text" 
                                            name="especialidade" 
                                            id="especialidade" 
                                            value={especialidade}
                                            onChange={(event) => setEspecialidade(event.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            telefone
                                        </label>
                                        <div>
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

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            email
                                        </label>
                                        <div>
                                            <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
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
