'use client'
import { addCliente, updateCliente, getClientes, removeCliente } from "@/lib/clientes/clientes";

import React, { useEffect, useState } from "react";

interface Cliente {
    id: number;
    nome: string;
    endereco: string;
    data_de_nascimento: string;
    numero_de_telefone: string;
    email: string;
    CPF: string;
}

export default function Page() {
    const [ nome, setNome] = useState('nome')
    const [ endereco, setEndereco] = useState('endereço')
    const [ data_de_nascimento, setDataDeNascimento] = useState('data')
    const [ numero_de_telefone, setNumeroDeTelefone] = useState(0)  
    const [ email, setEmail] = useState('email') 
    const [ CPF, setCPF] = useState('CPF')
    const [ isModalOpen, setIsModalOpen] = useState(false)
    const [ clientes, setClientes] = useState<Cliente[]>([])
    const [ id, setId] = useState(0)
    
    const fetchClientes = async () => {
        try {
            const data = await getClientes()
            setClientes(data)
        } catch (error) {
            console.error('Erro fetching clientes', error)
        }
    }

    useEffect(() => {
        fetchClientes()
    }, [])

    const handleEdit = ({
        id,
        nome,
        endereco,
        data_de_nascimento,
        numero_de_telefone,
        email,
        CPF

    }: Cliente) => {
        setId(id)
        setNome(nome)
        setEndereco(endereco)
        setDataDeNascimento(data_de_nascimento)
        setNumeroDeTelefone(numero_de_telefone)
        setEmail(email)
        setCPF(CPF)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Cliente) => {
            await removeCliente(id)
            fetchClientes()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addCliente(
                    nome,
                    endereco,
                    data_de_nascimento,
                    numero_de_telefone,
                    email,
                    CPF
                )
            else 
                await updateCliente(
                    id,
                    nome,
                    endereco,
                    data_de_nascimento,
                    numero_de_telefone,
                    email,
                    CPF
                )

            fetchClientes()
            closeModal()
        } catch (error) {
            console.error(' Erro adding cliente:', error)
        }
    }
    

return (
    <div className="container mx-auto p-4">
        <h1 className="text-2x1 font-bold mb-4">Cadastro De Clientes</h1>

        <div className="mb-4">
            <button
            onClick={() => handleEdit({
                id: 0,
                nome: '',
                endereco: '',
                data_de_nascimento: '',
                numero_de_telefone: '',
                email: '',
                CPF: ''
            })}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Adicionar novo Cliente
            </button>
        </div>

        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Nome</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Açoes</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr 
                        key={cliente.id}
                        className="hover:bg-gray-100 cursor-pointer"
                        >
                            <td className="border px-4 py2">{cliente.nome}</td>
                            <td className="border px-4 py2">{cliente.email}</td>
                            <td className="border px-4 py2">
                                <button
                                className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => handleEdit(cliente)}
                                >
                                    Editar
                                </button>
                                <button
                                className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => handleRemove(cliente)}
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
                        Novo Cliente 
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
                                        Endereço
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

                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        Data de nascimento
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

                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        numero de telefone
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text" 
                                        name="numero_de_telefone" 
                                        id="numero_de_telefone" 
                                        value={numero_de_telefone}
                                        onChange={(event) => setNumeroDeTelefone(event.target.value)}
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
                                    <div className="mt-1">
                                        <input 
                                        type="text" 
                                        name="email" 
                                        id="email" 
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        CPF
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text" 
                                        name="CPF" 
                                        id="CPF" 
                                        value={CPF}
                                        onChange={(event) => setCPF(event.target.value)}
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
  );
}
