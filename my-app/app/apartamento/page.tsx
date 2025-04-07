'use client'

import React, { useEffect, useState } from "react"
import { addApartamento, getApe, updateApe, removeApe } from "@/lib/apartamento/apartamento"

interface Apartamento {
    id: number
    tipo: string
    condominio: string
    area_privativa: number
    area_comum: number
    quantidade_de_quartos: number
    quantidade_de_banheiros: number
    tem_churrasqueira: boolean
    tem_piscina: boolean
    valor_do_condominio: number
    preco_de_venda: number
}

export default function Page() {
    const [tipo, seTtipo] = useState('')
    const [condominio, setCondominio] = useState('')
    const [area_privativa, setArea_privativa] = useState(0)
    const [area_comum, setArea_comum] = useState(0)
    const [quantidade_de_quartos, setQuantidade_de_quartos] = useState(0)
    const [quantidade_de_banheiros, setQuantidade_de_banheiros] = useState(0)
    const [tem_churrasqueira, setTem_churrasqueira] = useState(false)
    const [tem_piscina, setTem_piscina] = useState(false)
    const [valor_do_condominio, setValor_do_condominio] = useState(0)
    const [preco_de_venda, setPreco_de_venda] = useState(0)
    
    const [apartamento, setApartamento] = useState<Apartamento[]>([]) 
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const fetchApe = async () => {
            try {
                const data = await getApe()
                setApartamento(data)
            } catch (error) {
                console.error('Erro fetching apartamento', error)
            }
        }

        useEffect(() => {
                fetchApe()
            }, [])

            const handleEdit = ({
                id,
                tipo,
                condominio,
                area_privativa,
                area_comum,
                quantidade_de_quartos,
                quantidade_de_banheiros,
                tem_churrasqueira,
                tem_piscina,
                valor_do_condominio,
                preco_de_venda

            }: Apartamento) => {
                setId(id)
                seTtipo(tipo)
                setCondominio(condominio)
                setArea_privativa(area_privativa)
                setArea_comum(area_comum)
                setQuantidade_de_quartos(quantidade_de_quartos)
                setQuantidade_de_banheiros(quantidade_de_banheiros)
                setTem_churrasqueira(tem_churrasqueira)
                setTem_piscina(tem_piscina)
                setValor_do_condominio(valor_do_condominio)
                setPreco_de_venda(preco_de_venda)
                setIsModalOpen(true)
            }

            const handleRemove = async ({
                    id
                }: Apartamento) => {
                    await removeApe(id)
                    fetchApe()
                }
            
                const closeModal = () => {
                    setIsModalOpen(false)
                }

            const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault()
                    try {
                        if(id === 0)
                            await addApartamento(
                                tipo,
                                condominio,
                                area_privativa,
                                area_comum,
                                quantidade_de_quartos,
                                quantidade_de_banheiros,
                                tem_churrasqueira,
                                tem_piscina,
                                valor_do_condominio,
                                preco_de_venda
                            )
                        else 
                            await updateApe(
                                id,
                                tipo,
                                condominio,
                                area_privativa,
                                area_comum,
                                quantidade_de_quartos,
                                quantidade_de_banheiros,
                                tem_churrasqueira,
                                tem_piscina,
                                valor_do_condominio,
                                preco_de_venda
                            )
                        fetchApe()
                        closeModal()
                    } catch (error) {
                        console.error(' Erro adding apartamento:', error)
                    }
                }
        
    
    return (
        <div className="container mx-auto p-4">
            <h1>Casdatro de Apartamento</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id:  0,
                    tipo:  '',
                    condominio:  '',
                    area_privativa:  0,
                    area_comum:  0,
                    quantidade_de_quartos:  0,
                    quantidade_de_banheiros:  0,
                    tem_churrasqueira:  Boolean,
                    tem_piscina:  Boolean,
                    valor_do_condominio:  0,
                    preco_de_venda:  0
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar novo Apartamento
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                        <th className="border px-4 py-2">condominio</th>
                        <th className="border px-4 py-2">tipo</th>
                        <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apartamento.map((apartamento) => (
                            <tr
                            key={apartamento.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{apartamento.condominio}</td>
                                <td className="border px-4 py-2">{apartamento.tipo}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(apartamento)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(apartamento)}
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
                            Novo Apartamento
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <div>
                                        <label htmlFor="tipo"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            tipo
                                        </label>
                                        <div className="mt-1">
                                            <input type="text" 
                                            value={tipo}
                                            onChange={(event) => seTtipo(event.target.value)}
                                            id="tipo"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="condominio"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            condominio
                                        </label>
                                        <div className="mt-1">
                                            <input type="text" 
                                            value={condominio}
                                            onChange={(event) => setCondominio(event.target.value)}
                                            id="condominio"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="area_privativa"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            area privativa
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={area_privativa}
                                            onChange={(event) => setArea_privativa(event.target.value)}
                                            id="area_privativa"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="area_comum"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            area comum
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={area_comum}
                                            onChange={(event) => setArea_comum(event.target.value)}
                                            id="area_comum"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="quantidade_de_quartos"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            quantidade de quartos
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={quantidade_de_quartos}
                                            onChange={(event) => setQuantidade_de_quartos(event.target.value)}
                                            id="quantidade_de_quartos"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="quantidade_de_banheiros"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            quantidade de banheiros
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={quantidade_de_banheiros}
                                            onChange={(event) => setQuantidade_de_banheiros(event.target.value)}
                                            id="quantidade_de_banheiros"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="tem_churrasqueira"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            tem churrasqueira
                                        </label>
                                        <div className="mt-1">
                                            <input type="checkbox" 
                                            checked={tem_churrasqueira}
                                            onChange={(event) => setTem_churrasqueira(event.target.checked)}
                                            id="tem_churrasqueira"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="tem_piscina"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            tem piscina
                                        </label>
                                        <div className="mt-1">
                                            <input type="checkbox" 
                                            checked={tem_piscina}
                                            onChange={(event) => setTem_piscina(event.target.checked)}
                                            id="tem_piscina"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="valor_condominio"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            valor condominio
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={valor_do_condominio}
                                            onChange={(event) => setValor_do_condominio(event.target.value)}
                                            id="valor_condominio"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="preco_de_venda"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            preço de venda
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={preco_de_venda}
                                            onChange={(event) => setPreco_de_venda(event.target.value)}
                                            id="preco_de_venda"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
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