'use client'

import { useEffect, useState } from "react"
import { addPneu } from "@/lib/pneus/pneu"

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
        </div>
    )
}