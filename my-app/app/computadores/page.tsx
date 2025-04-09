'use client'

import { useEffect, useState } from "react"
import { addComputador, updateComputador, getComputadores, removeComputador } from "@/lib/computadores/computador"

interface Computador {
    id: number,
    descricao: string,
    cpu: string,
    memoria: string,
    placa_video: string,
    placa_mae: string,
    fonte: string,
    armazenamento: string
}

export default function Page() {
    const [descricao, setDescricao] = useState('')
    const [cpu, setCpu] = useState('')
    const [memoria, setMemoria] = useState('')
    const [placa_video, setPlaca_video] = useState('')
    const [placa_mae, setPlaca_mae] = useState('')
    const [fonte, setFonte] = useState('')
    const [armazenamento, setArmazenamento] = useState('')
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [computadores, setComputadores] =useState<Computador[]>([])

    const fetchComputadores = async () => {
        try {
            const data = await getComputadores()
            setComputadores(data)
        } catch (error) {
            console.error('Erro fetching computador', error)
        }
    }

    useEffect(() => {
        fetchComputadores()
    }, [])

    const handleEdit = ({
        id,
        descricao,
        cpu,
        memoria,
        placa_video,
        placa_mae,
        fonte,
        armazenamento
    }: Computador) => {
        console.log(placa_video)
        console.log(placa_mae)
        setId(id)
        setDescricao(descricao || '')
        setCpu(cpu || '')
        setMemoria(memoria || '')
        setPlaca_video(placa_video || '')
        setPlaca_mae(placa_mae || '')
        setFonte(fonte || '')
        setArmazenamento(armazenamento || '')
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Computador) => {
            await removeComputador(id)
            fetchComputadores()
        }

        const closeModal = () => {
            setIsModalOpen(false)
        }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addComputador(
                    descricao,
                    cpu,
                    memoria,
                    placa_video,
                    placa_mae,
                    fonte,
                    armazenamento
                )
            else 
                await updateComputador(
                    id,
                    descricao,
                    cpu,
                    memoria,
                    placa_video,
                    placa_mae,
                    fonte,
                    armazenamento
                )
            fetchComputadores()
            closeModal()
        } catch (error) {
            console.error(' Erro adding computador:', error)
        }
    }
    
    return (
        <div className="container mx-auto p-4">
            <h1>Cadastro de Computadores</h1>

            <div className="mb-4">
                <button 
                onClick={() => handleEdit({
                    id: 0,
                    descricao: '',
                    cpu: '',
                    memoria: '',
                    placa_video: '',
                    placa_mae: '',
                    fonte: '',
                    armazenamento: ''
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar novo Computador
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Cpu</th>
                            <th className="border px-4 py-2">Descriçao</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {computadores.map((pc) => (
                            <tr
                            key={pc.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{pc.cpu}</td>
                                <td className="border px-4 py-2">{pc.descricao}</td>
                                <td className="border px-4 py-2">
                                    <button 
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(pc)}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(pc)}
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
                            Novo Computador
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <div>
                                        <label htmlFor="" 
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Descricao
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
                                            cpu
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text"
                                            name="cpu"
                                            id="cpu"
                                            value={cpu}
                                            onChange={(event) => setCpu(event.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" 
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            memoria
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text"
                                            name="memoria"
                                            id="memoria"
                                            value={memoria}
                                            onChange={(event) => setMemoria(event.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" 
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            placa de video
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text"
                                            name="placa_de_video"
                                            id="placa_de_video"
                                            value={placa_video}
                                            onChange={(event) => setPlaca_video(event.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" 
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            placa Mae
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text"
                                            name="placaMae"
                                            id="placaMae"
                                            value={placa_mae}
                                            onChange={(event) => setPlaca_mae(event.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" 
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Fonte
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text"
                                            name="Fonte"
                                            id="Fonte"
                                            value={fonte}
                                            onChange={(event) => setFonte(event.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" 
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            armazenamento
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text"
                                            name="armazenamento"
                                            id="armazenamento"
                                            value={armazenamento}
                                            onChange={(event) => setArmazenamento(event.target.value)}
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