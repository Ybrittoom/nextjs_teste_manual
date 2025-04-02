'use client'


import React, { useEffect, useState } from "react"
import { addAnimal, getAnimais, updateAnimal, removeAnimal } from "@/lib/animais/animal"

interface Animal {
    id: number;
    nome: string;
    nomeCientifico: string;
    especie: string;
    grupo: string;
}


export default function Page() {
    const [nome, setNome] = useState('nome')
    const [nomeCientifico, setNomeCientifico] = useState('nomeCientifico')
    const [especie, setEspecie] = useState('especie')
    const [grupo, setGrupo] = useState('grupo')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [id, setId] = useState(0)
    const [animais, setAnimais] = useState<Animal[]>([])

    const fetchAnimais = async () => {
        try {
            const data = await getAnimais()
            setAnimais(data)
        } catch (error) {
            console.error('Erro fetching animais', error)
        }
    }

    useEffect(() => {
        fetchAnimais()
    }, [])

    const handleEdit = ({
        id,
        nome,
        nomeCientifico,
        especie,
        grupo
    }: Animal) => {
        setId(id)
        setNome(nome)
        setNomeCientifico(nomeCientifico)
        setEspecie(especie)
        setGrupo(grupo)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
        id
    }: Animal) => {
        await removeAnimal(id)
        fetchAnimais()
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addAnimal(nome, nomeCientifico, especie, grupo)
            else 
                await updateAnimal(id, nome, nomeCientifico, especie, grupo)
            fetchAnimais()
            closeModal()
        } catch (error) {
            console.error(' Erro adding animal:', error)
        }
    }


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro de Animais</h1>

        <div className="mb-4">
            <button
            onClick={() => handleEdit({
                id: 0, 
                nome: '',
                nomeCientifico: '',
                especie: '',
                grupo: ''
            })}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Adicionar novo Animal
            </button>
        </div>

        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Nome</th>
                        <th className="border px-4 py-2">Nome cientifico</th>
                        <th className="border px-4 py-2">Especie</th>
                        <th className="border px-4 py-2">Grupo</th>
                    </tr>
                </thead>
                <tbody>
                    {animais.map((animal) => (
                        <tr
                        key={animal.id}
                        className="hover:bg-gray-100 cursor-pointer"
                        >
                            <td className="border px-4 py-2">{animal.nome}</td>
                            <td className="border px-4 py-2">{animal.grupo}</td>
                            <td className="border px-4 py-2">
                                <button
                                className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => handleEdit(animal)}
                                >
                                    Editar
                                </button>
                                <button
                                className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => handleRemove(animal)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        
        {/* Modal*/ }
        {isModalOpen && (
            <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
                
                <div className="bg-white rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-base font-semibold text-gray-900 md-4">
                        Novo Animal
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                <div>
                                    <label htmlFor="nome"
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        Nome
                                    </label>
                                    <div className="mt-1">
                                        <input type="text" 
                                        value={nome}
                                        onChange={(event) => setNome(event.target.value)}
                                        id="nome"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="nomeCientifico"
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        Nome Cientifico
                                    </label>
                                    <div className="mt-1">
                                        <input type="text" 
                                        value={nomeCientifico}
                                        onChange={(event) => setNomeCientifico(event.target.value)}
                                        id="nomeCientifico"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="especie"
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        especie
                                    </label>
                                    <div className="mt-1">
                                        <input type="text" 
                                        value={especie}
                                        onChange={(event) => setEspecie(event.target.value)}
                                        id="especie"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="grupo"
                                    className="block text-sm font-medium text-gray-900"
                                    >
                                        grupo
                                    </label>
                                    <div className="mt-1">
                                        <input type="text" 
                                        value={grupo}
                                        onChange={(event) => setGrupo(event.target.value)}
                                        id="grupo"
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
