'use client'

import { addProduto } from "@/lib/produtos/produtos"
import { use, useState } from "react"

export default function Page() {
    const [ nome, setNome] =  useState('nome produto')
    const [ valorUnitario, setValorUnitario] = useState(0)
    const [ validade, setValidade] = useState('') 
    const [descricao, setDescricao] = useState('Descriçao')
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [produtos, setProdutos] = useState<Produto[]>([])

    const fetchProdutos = async () => {
        try {
            const data = await getProdutos()
            setProdutos(data)
        } catch (error) {
            console.error('Erro fetching produto', error)
        }
    }

    useEffect(() => {
        fetchProdutos()
    }, [])

    const handleEdit = ({
        id,
        nome,
        valorUnitario,
        validade,
        descricao

    }: Produto) => {
        setId(id)
        setNome(nome)
        setValorUnitario(valorUnitario)
        setValidade(validade)
        setDescricao(descricao)
    }

    const handleRemove = async ({
        id
    }: Produto) => {
        await removeProduto(id)
        fetchProdutos()
    }
    
    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addProduto(
                    nome,
                    valorUnitario,
                    validade,
                    descricao
                )
            else 
                await updateProduto(id, 
                    nome,
                    valorUnitario,
                    validade,
                    descricao
                )
            fetchAnimais()
            closeModal()
        } catch (error) {
            console.error(' Erro adding animal:', error)
        }
    }
    


    return ()
}