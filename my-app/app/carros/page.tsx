'use client'

import { useEffect, useState } from "react"
import { addCarro } from "@/lib/carros/carro"
import { updateAluno } from "@/lib/alunos/aluno"

//aqui ficara os imports

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
            setFabricante(Fabricante)
            setModelo(modelo)
            setAno_de_fabricacao(ano_de_fabricacao)
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
                    ano_de_fabricacao: Date,
                    cor: '',
                    quilometros_rodado: Number
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
                        <th className="border px-4 py-2">Ano de fabricaçao</th>
                        <th className="border px-4 py-2">cor</th>
                        <th className="border px-4 py-2">quilometros rodados</th>
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

        </div>
    )
}