'use client'

import { useEffect, useState } from "react"
import { addUser, getUsuarios, removeUsuario, updateUsuarios } from "@/lib/usuario/usuario"

interface Usuario {
    nome: string
    apelido: string
    email: string
    senha: string
    id: number
}


export default function Page() {
    const [nome, setNome] = useState('nome')
    const [apelido, setApelido] = useState('apelido')
    const [email, setEmail] = useState('email') 
    const [senha, setSenha] = useState('senha')
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const fetchUsuarios = async () => {
        try {
            const data = await getUsuarios()
            setUsuarios(data)
        } catch (error) {
            console.error('Erro fetching usuarios', error)
        }
    }

    useEffect(() => {
        fetchUsuarios()
    }, [])

    const handleEdit = ({
        id,
        nome,
        apelido,
        email,
        senha

    }: Usuario) => {
        setId(id)
        setNome(nome)
        setApelido(apelido)
        setEmail(email)
        setSenha(senha)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Usuario) => {
            await removeUsuario(id)
            fetchUsuarios()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addUser(
                    nome,
                    apelido,
                    email,
                    senha
                )
            else 
                await updateUsuarios(
                    id,
                    nome,
                    apelido,
                    email,
                    senha
                )

            fetchUsuarios()
            closeModal()
        } catch (error) {
            console.error(' Erro adding usuario:', error)
        }
    }
    

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Usuarios</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id: 0,
                    nome: '',
                    apelido: '',
                    email: '',
                    senha: ''
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar Usuario
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
                        {usuarios.map((usuario) => (
                            <tr
                            key={usuario.id}
                            className="hover:bg-gray-100"
                            >
                                <td className="border px-4 py-2">{usuario.nome}</td>
                                <td className="border px-4 py-2">{usuario.email}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(usuario)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(usuario)}
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
                        <h2 className="text-base font-semibold text-gray-900 mb-4">
                            Novo usuario
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <div>
                                        <label
                                        htmlFor="nome"
                                        className="block text-sm font-medium text-gray-900">
                                            Nome
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text"
                                            name="nome"
                                            id="nome"
                                            value={nome}
                                            onChange={(event) => setNome(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                        htmlFor="apelido"
                                        className="block text-sm font-medium text-gray-900">
                                            apelido
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text"
                                            name="apelido"
                                            id="apelido"
                                            value={apelido}
                                            onChange={(event) => setApelido(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-900">
                                            email
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                        htmlFor="senha"
                                        className="block text-sm font-medium text-gray-900">
                                            senha
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="password"
                                            name="senha"
                                            id="senha"
                                            value={senha}
                                            onChange={(event) => setSenha(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text"
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
