'use client'

import { useEffect, useState } from "react"
import { addPneu, getPneus, removePneu, updatePneu } from "@/lib/pneus/pneu"

interface Pneu {
    id: number;
    marca: string;
    modelo: string;
    largura: number;
    raio: number;
    especura: number;
    carga_maxima: number;
}


export default function Page() {
    const [ marca, setMarca] = useState('marca')    
    const [ modelo, setModelo] = useState('modelo')
    const [ largura, setLargura] = useState(0)
    const [ raio, setRaio] = useState(0)
    const [ especura, setEspecura] = useState(0)
    const [ carga_maxima, setCarga_maxima] = useState(0)   
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pneu, setPneu] = useState<Pneu[]>([])

    const fetchPneus = async () => {
        try {
            const data = await getPneus()
            setPneu(data)
        } catch (error) {
            console.error('Erro fetching pneu', error)
        }
    }

    useEffect(() => {
        fetchPneus()
    }, [])

    const handleEdit = ({
        id,
        marca,
        modelo,
        largura,
        raio,
        especura,
        carga_maxima
        
    }: Pneu) => {
        setId(id)
        setMarca(marca)
        setModelo(modelo)
        setLargura(largura)
        setRaio(raio)
        setEspecura(especura)
        setCarga_maxima(carga_maxima)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Pneu) => {
            await removePneu(id)
            fetchPneus()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addPneu(
                    marca,
                    modelo,
                    largura,
                    raio,
                    especura,
                    carga_maxima
                )
            else 
                await updatePneu(
                    id,
                    marca,
                    modelo,
                    largura,
                    raio,
                    especura,
                    carga_maxima
                )

            fetchPneus()
            closeModal()
        } catch (error) {
            console.error(' Erro adding pneu:', error)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro De Pneus</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id: 0,
                    marca: '',
                    modelo: '',
                    largura: 0,
                    raio: 0,
                    especura: 0,
                    carga_maxima: 0
                    
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs"
                >
                    Adicionar novo Pneu
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Marca</th>
                            <th className="border px-4 py-2">Modelo</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pneu.map((pneu) => (
                            <tr
                            key={pneu.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{pneu.marca}</td>
                                <td className="border px-4 py-2">{pneu.modelo}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(pneu)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(pneu)}
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
                            Novo Pneu
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        Marca
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text" 
                                        name="marca" 
                                        id="marca" 
                                        value={marca}
                                        onChange={(event) => setMarca(event.target.value)}
                                        required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        modelo
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="text" 
                                        name="modelo" 
                                        id="modelo" 
                                        value={modelo}
                                        onChange={(event) => setModelo(event.target.value)}
                                        required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        largura
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="number" 
                                        name="largura" 
                                        id="largura" 
                                        value={largura}
                                        onChange={(event) => setLargura(Number(event.target.value))}
                                        required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        raio
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="number" 
                                        name="raio" 
                                        id="raio" 
                                        value={raio}
                                        onChange={(event) => setRaio(Number(event.target.value))}
                                        required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        especura
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="number" 
                                        name="especura" 
                                        id="especura" 
                                        value={especura}
                                        onChange={(event) => setEspecura(Number(event.target.value))}
                                        required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor=""
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        carga maxima
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                        type="number" 
                                        name="carga_maxima" 
                                        id="carga_maxima" 
                                        value={carga_maxima}
                                        onChange={(event) => setCarga_maxima(Number(event.target.value))}
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