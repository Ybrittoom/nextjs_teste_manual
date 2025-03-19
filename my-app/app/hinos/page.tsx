'use client'


import { useActionState, useEffect, useState } from "react"
import { addHino } from "@/lib/hino/hino"

export default function Page() {
    const [hinos, setHinos] = useState<Hino[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [id, setId] = useState(0)
    const [titulo, setTitulo] = useState('titulo')
    const [numero, setNumero] = useState(0)
    const [letra, setLetra] = useState('letra') 


    const fetchHinos = async () => {
        try {
            const data = await getHinos()
            setHinos(data)
        } catch (error) {
            console.error(' Erro fetching hinos:',error)
        }
    }

    useEffect(() => {
        fetchHinos()
    }, [])

    const handleEdit = ({id, titulo, numero, letra}: Hino) => {
        setId(id)
        setTitulo(titulo)
        setNumero(numero)
        setLetra(letra)
        setIsModalOpen(true)
    }
    
    const handleRemove = async ({id}: Hino) => {
        await removeHino(id)
        fetchHinos()
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addHino(titulo, numero, letra)
            else 
                await updateHino(id, titulo, numero, letra)
            fetchHinos()
            closeModal()
        } catch (error) {
            console.error('Error adding hino:',  error)
        }
    }



    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cadastro de Hinos</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({id: 0, titulo: '', numero: 0, letra:''})}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar Novo Hino
                </button>
            </div>

            <div className="overFlow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Numero</th>
                            <th className="border px-4 py-2">Titulo</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                </table>
            </div>

        </div>
    )
}
