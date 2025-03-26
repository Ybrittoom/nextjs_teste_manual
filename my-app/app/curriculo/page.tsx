'use client'


import { useEffect, useState } from "react"
import { addCurriculo } from "@/lib/curriculo/curriculo"

interface Curriculo {
    id: number;
    nome: string;
    endereco: string;
    curriculo: string;
    habilidades: strin;
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


    return ()
}
