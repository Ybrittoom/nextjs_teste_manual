'use client'

import { useEffect, useState } from "react"
import { addCarro, getCarros, updateCarro, removeCarro } from "@/lib/carros/carro"

interface Carro {
    id: number;
    Fabricante: string;
    modelo: string;
    ano_de_fabricacao: Date;
    cor: string;
    quilometros_rodados: number;
}


export default function Page() {
    
    //aqui ficara as constantes
    const [Fabricante, setFabricante] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano_de_fabricacao, setAno_de_fabricacao] = useState('')
    const [cor, setCor] = useState('')
    const [quilometros_rodados, setQuilometros_rodados] = useState(0)    

    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [carros, setCarros] = useState<Carro[]>([])

    const fetchCarros = async () => {
            try {
                const data = await getCarros()
                setCarros(data)
            } catch (error) {
                console.error('Erro fetching carro', error)
            }
        }
    
        useEffect(() => {
            fetchCarros()
        }, [])
    
        const handleEdit = ({
            id,
            Fabricante,
            modelo,
            ano_de_fabricacao,
            cor,
            quilometros_rodados

        }: Carro) => {
            setId(id)
            setFabricante(Fabricante || '')
            setModelo(modelo)
            setAno_de_fabricacao(ano_de_fabricacao || '')
            setCor(cor)
            setQuilometros_rodados(quilometros_rodados)
            setIsModalOpen(true)
        }
    
        const handleRemove = async ({
            id
        }: Carro) => {
            await removeCarro(id)
            fetchCarros()
        }
    
        const closeModal = () => {
            setIsModalOpen(false)
        }
    
        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            try {
                if(id === 0)
                    await addCarro(
                        Fabricante,
                        modelo,
                        ano_de_fabricacao,
                        cor,
                        quilometros_rodados
                    )
                else 
                    await updateCarro(
                            id,
                            Fabricante,
                            modelo,
                            ano_de_fabricacao,
                            cor,
                            quilometros_rodados 
                        )
                fetchCarros()
                closeModal()
            } catch (error) {
                console.error(' Erro adding carro:', error)
            }
        }


    return (
        <div className="conteiner mx-auto p-4">
            <h1>Cadastro de Carro</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id: 0,
                    Fabricante: '',
                    modelo: '',
                    ano_de_fabricacao: new Date().toISOString().split("T")[0],
                    cor: '',
                    quilometros_rodado: 0
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar Novo Carro
                </button>
            </div>

            <div className="overflow">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Fabricante</th>
                        <th className="border px-4 py-2">Modelo</th>
                        <th className="border px-4 py-2">Açoes</th>
                    </tr>
                </thead>
                <tbody>
                    {carros.map((carro) => (
                        <tr
                        key={carro.id}
                        className="hover:bg-gray-100 cursor-pointer"
                        >
                            <td className="border px-4 py-2">{carro.fabricante}</td>
                            <td className="border px-4 py-2">{carro.modelo}</td>
                            <td className="border px-4 py-2">
                                <button
                                className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => handleEdit(carro)}
                                >
                                    Editar
                                </button>
                                <button
                                className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => handleRemove(carro)}
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
                            Novo Carro
                        </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                <div>
                                    <label htmlFor="fabricante"
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        Fabricante
                                    </label>
                                    <div className="mt-1">
                                        <input type="text" 
                                        value={Fabricante}
                                        onChange={(event) => setFabricante(event.target.value)}
                                        required/>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                <div>
                                    <label htmlFor="modelo"
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        Modelo
                                    </label>
                                    <div className="mt-1">
                                        <input type="text" 
                                        value={modelo}
                                        onChange={(event) => setModelo(event.target.value)}
                                        required/>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                <div>
                                    <label htmlFor="ano_de_fabricaçao"
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        Ano de Fabricaçao
                                    </label>
                                    <div className="mt-1">
                                        <input type="date" 
                                        value={ano_de_fabricacao}
                                        onChange={(event) => setAno_de_fabricacao(event.target.value)}
                                        required/>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                <div>
                                    <label htmlFor="cor"
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        cor
                                    </label>
                                    <div className="mt-1">
                                        <input type="text" 
                                        value={cor}
                                        onChange={(event) => setCor(event.target.value)}
                                        required/>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                <div>
                                    <label htmlFor="quilometros_rodados"
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        quilometros rodados
                                    </label>
                                    <div className="mt-1">
                                        <input type="number" 
                                        value={quilometros_rodados}
                                        onChange={(event) => setQuilometros_rodados(event.target.value)}
                                        required/>
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
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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