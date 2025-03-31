'use client'
import { addInstrutores, getInstrutores, updateInstrutores, removeInstrutor } from "@/lib/instrutores/instrutor";

import React, { useEffect, useState } from "react";

interface Instrutor {
    id: number
    nome: string
    especialidade: string
    data_de_nascimento: Date
    endereco: string
    comum: string
}

export default function Page() {
    const [ nome, setNome] = useState('nome')
    const [ especialidade, setEspecialidade] = useState('especialidade')
    const [ data_de_nascimento, setDataDeNascimento] = useState('')
    const [ endereco, setEndereco] = useState('endereço')
    const [ comum, setComum] = useState('comum')
    const [ isModalOpen, setIsModalOpen] = useState(false)
    const [ instrutores, setInstrutores] = useState<Instrutor[]>([])
    const [ id, setId] = useState(0)

    const fetchInstrutor = async () => {
        try {
            const data = await getInstrutores()
            setInstrutores(data)
        } catch (error) {
            console.error('Erro fetching isntrutores', error)
        }
    }

    useEffect(() => {
        fetchInstrutor()
    }, [])

    const handleEdit = ({
        id,
        nome,
        especialidade,
        data_de_nascimento,
        endereco,
        comum
    }: Instrutor) => {
        setId(id)
        setNome(nome)
        setEspecialidade(especialidade)
        setDataDeNascimento(data_de_nascimento)
        setEndereco(endereco)
        setComum(comum)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Instrutor) => {
            await removeInstrutor(id)
            fetchInstrutor()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addInstrutores(
                    nome,
                    especialidade,
                    data_de_nascimento,
                    endereco,
                    comum
                )
            else 
                await updateInstrutores(
                    id,
                    nome,
                    especialidade,
                    data_de_nascimento,
                    endereco,
                    comum
                )

            fetchInstrutor()
            closeModal()
        } catch (error) {
            console.error(' Erro adding instrutor:', error)
        }
    }

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Instrutores</h1>

            <div className="mb-4">
                <button 
                onClick={ () => handleEdit({
                    id: 0,
                    nome: '',
                    especialidade: '',
                    data_de_nascimento: '',
                    endereco: '',
                    comum: ''
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs"
                >
                    Adicionar novo instrutor
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
                        {instrutores.map((instrutor) => (
                            <tr
                            key={instrutor.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{instrutor.nome}</td>
                                <td className="border px-4 py-2">{instrutor.especialidade}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={ () => handleEdit(instrutor)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={ () => handleRemove(instrutor)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-base font-semibold text-gray-900 md-4">
                            Novo Instrutor
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
                                            especialidade
                                        </label>
                                        <div className="mt-1">
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
                                            data de nascimento
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="date" 
                                            name="data_de_nascimento" 
                                            id="data_de_nascimento" 
                                            value={data_de_nascimento}
                                            onChange={(event) => setDataDeNascimento(event.target.value)}
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