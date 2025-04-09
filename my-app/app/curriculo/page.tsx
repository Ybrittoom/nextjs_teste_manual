'use client'


import { useEffect, useState } from "react"
import { addCurriculo, getCurriculos, updateCurriculo, removeCurriculo } from "@/lib/curriculo/curriculo"

interface Curriculo {
    id: number;
    nome: string;
    endereco: string;
    curriculo: string;
    habilidades: string;
}

export default function Page() {
    const [nome, setNome] = useState('nome')
    const [endereco, setEndereco] = useState('endereco')
    const [curriculo, setCurriculo] = useState('curriculo') 
    const [habilidades, setHabilidades] = useState('habilidade')
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [curriculos, setCurriculos] = useState<Curriculo[]>([])

    const fetchCurriculos = async () => {
        try {
            const data = await getCurriculos()
            setCurriculos(data)
        } catch (error) {
            console.error('Erro fetching curriculo', error)
        }
    }

    useEffect(() => {
        fetchCurriculos()
    }, [])

    const handleEdit = ({
        id,
        nome,
        endereco,
        curriculo,
        habilidades
    }: Curriculo) => {
        setId(id)
        setNome(nome)
        setEndereco(endereco)
        setCurriculo(curriculo)
        setHabilidades(habilidades)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Curriculo) => {
            await removeCurriculo(id)
            fetchCurriculos()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addCurriculo(
                    nome,
                    endereco,
                    curriculo,
                    habilidades
                )
            else 
                await updateCurriculo(
                    id,
                    nome,
                    endereco,
                    curriculo,
                    habilidades
                )

            fetchCurriculos()
            closeModal()
        } catch (error) {
            console.error(' Erro adding curriculo:', error)
        }
    }


    return (


        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro de curriculo</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id: 0,
                    nome: '',
                    endereco: '',
                    curriculo: '',
                    habilidades: ''
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar novo Curriculo
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">habilidade</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {curriculos.map((curriculo) => (
                            <tr 
                            key={curriculo.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py2">{curriculo.nome}</td>
                                <td className="border px-4 py2">{curriculo.habilidades}</td>
                                <td className="border px-4 py2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(curriculo)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(curriculo)}
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
                        Novo Curriculo
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
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        required
                                        />
                                    </div>
                                </div>
    
                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        endereco
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text" 
                                        name="endereco" 
                                        id="endereco" 
                                        value={endereco}
                                        onChange={(event) => setEndereco(event.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        required
                                        />
                                    </div>
                                </div>
    
                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        curriculo
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text" 
                                        name="curriculo" 
                                        id="curriculo" 
                                        value={curriculo}
                                        onChange={(event) => setCurriculo(event.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        required
                                        />
                                    </div>
                                </div>
    
                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        habilidade
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text" 
                                        name="habilidade" 
                                        id="habilidade" 
                                        value={habilidades}
                                        onChange={(event) => setHabilidades(event.target.value)}
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
