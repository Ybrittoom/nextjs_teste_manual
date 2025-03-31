'use client'

import { useEffect, useState } from "react"
import { addInstrumento, getInstrumentos, removeInstrumento, updateInstrumento } from "@/lib/instrumentos/instrumento"


interface Instrumento {
    id: number;
    nome: string;
    tipo: string;
}


export default function Page() {
    const [nome, setNome] = useState('nome')
    const [tipo, setTipo] = useState('tipo')
    const [id , setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([])

    const fetchInstrumentos = async () => {
        try {
            const data = await getInstrumentos()
            setInstrumentos(data)
        } catch (error) {
            console.error('Erro fetching instrumentos', error)
        }
    }

    useEffect(() => {
        fetchInstrumentos()
    }, [])

    const handleEdit = ({
        id,
        nome,
        tipo
    }: Instrumento) => {
        setId(id)
        setNome(nome)
        setTipo(tipo)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Instrumento) => {
            await removeInstrumento(id)
            fetchInstrumentos()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            try {
                if(id === 0)
                    await addInstrumento(
                        nome,
                        tipo
                    )
                else 
                    await updateInstrumento(
                        id,
                        nome,
                        tipo
                    )
    
                fetchInstrumentos()
                closeModal()
            } catch (error) {
                console.error(' Erro adding isntrumentos:', error)
            }
        }
        

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Instrumentos</h1>

            <div className="mb-4">
                <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white"
                onClick={() => handleEdit({
                    id: 0,
                    nome: '',
                    tipo: ''
                })}
                >
                    Adicionar novo instrumento
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instrumentos.map((instrumento) => (
                            <tr
                            key={instrumento.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{instrumento.nome}</td>
                                <td className="border px-4 py-2">{instrumento.tipo}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(instrumento)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(instrumento)}>
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
                            Novo Instrumento
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
                                        <div className="mt-1"
                                        >
                                            <input
                                            type="text"
                                            name="nome"
                                            id="nome"
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-700"
                                        >
                                            tipo
                                        </label>
                                        <div className="mt-1"
                                            >
                                            <input
                                            type="text"
                                            name="tipo"
                                            id="tipo"
                                            value={tipo}
                                            onChange={(e) => setTipo(e.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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