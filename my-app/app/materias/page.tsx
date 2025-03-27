'use client'

import { useEffect, useState } from "react"
import { addMateria, getMaterias, updateMateria, removeMateria } from "@/lib/materias/materia"

interface Materia {
    id: number
    nome: string
    descricao: string
    ano_letivo: string
}

export default function Page() {
    //constantes ficarao aqui yago insetoooo
    const [nome, setNome] = useState('nome')
    const [descricao, setDescricao] = useState('descriçao')
    const [ano_letivo, setAno_letivo] = useState('ano letivo') 
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [materias, setMaterias] = useState<Materia[]>([])

    const fetchMaterias = async () => {
        try {
            const data = await getMaterias()
            setMaterias(data)
        } catch (error) {
            console.error('Erro fetching materias', error)
        }
    }

    useEffect(() => {
        fetchMaterias()
    }, [])

    const handleEdit = ({
        id,
        nome,
        descricao,
        ano_letivo

    }: Materia) => {
        setId(id)
        setNome(nome)
        setDescricao(descricao)
        setAno_letivo(ano_letivo)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Materia) => {
            await removeMateria(id)
            fetchMaterias()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addMateria(
                    nome,
                    descricao,
                    ano_letivo
                )
            else 
                await updateMateria(
                    id,
                    nome,
                    descricao,
                    ano_letivo
                )

            fetchMaterias()
            closeModal()
        } catch (error) {
            console.error(' Erro adding materia:', error)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro de Materias</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id: 0,
                    nome: '',
                    descricao: '',
                    ano_letivo: ''
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar nova Materia
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Descriçao</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {materias.map((materia) => (
                            <tr 
                            key={materia.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{materia.nome}</td>
                                <td className="border px-4 py-2">{materia.descricao}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(materia)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(materia)}
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
                        <h2 className="text-base font-semibold text-gray-900 md-4">
                            Novo Materia
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

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            descricao
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text" 
                                            name="descricao" 
                                            id="descricao" 
                                            value={descricao}
                                            onChange={(event) => setDescricao(event.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            ano letivo
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text" 
                                            name="ano_letivo" 
                                            id="ano_letivo" 
                                            value={ano_letivo}
                                            onChange={(event) => setAno_letivo(event.target.value)}
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