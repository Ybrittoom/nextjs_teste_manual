'use client'

import { addAluno, getAluno, updateAluno, removeAluno} from "@/lib/alunos/aluno"
import { useEffect, useState } from "react"

export default function Page() {
    const [alunos, setAlunos] = useState<Aluno[]>([])
    const [nome, setNome] = useState('nome')    
    const [nome_do_pai, setNome_do_pai] = useState('nome do pai')
    const [nome_da_mae, setNome_da_mae] = useState('nome da mae')
    const [data_de_nascimento, setData_de_nascimento] = useState('data de nascimento')
    const [cor_da_pele, setCor_da_pele] = useState('cor da pele')
    const [id, setId] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const fetchAlunos = async () => {
        try {
            const data = await getAluno()
            setAlunos(data)
        } catch (error) {
            console.error(' erro fetching alunos:', error)
        }
    }

    useEffect(() => {
        fetchAlunos()
    }, [])

    const handleEdit = ({id, nome, nome_do_pai, nome_da_mae, data_de_nascimento, cor_da_pele}: Aluno) => {
        setId(id)
        setNome(nome)
        setNome_do_pai(nome_do_pai)
        setNome_da_mae(nome_da_mae)
        setData_de_nascimento(data_de_nascimento)
        setCor_da_pele(cor_da_pele)
        setIsModalOpen(true)
    }

    const handleRemove = async ({id}: Aluno) => {
        await removeAluno(id)
        fetchAlunos()
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if (id === 0 )
                await addAluno(nome, nome_do_pai, nome_da_mae, data_de_nascimento, cor_da_pele)
            else 
                await updateAluno(id, nome, nome_do_pai, nome_da_mae, data_de_nascimento, cor_da_pele)
            fetchAlunos()
            closeModal()
        } catch (error) {
            console.error('Error adding aluno:', error)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro de Alunos</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({id: 0, nome: '', nome_do_pai: '', nome_da_mae: '', data_de_nascimento: '', cor_da_pele: ''})}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar novo Aluno
                </button>
            </div>

            <div className="overFlow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Data de nascimento</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>

                    <tbody>
                        {alunos.map((aluno) => (
                            <tr
                            key={aluno.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2️">{aluno.nome}</td>
                                <td className="border px-4 py-2️">{aluno.data_de_nascimento}</td>
                                <td className="border px-4 py2">
                                    <button
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(aluno)}
                                    >
                                        Editar
                                    </button>

                                    <button
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(aluno)}
                                    >
                                        Excluir
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/*Modal*/}
            {isModalOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-base font-semibold text-gray-900 md-4">
                            Novo aluno
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="spcae-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <div>
                                        <label 
                                            htmlFor="titulo"
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
                                        <label htmlFor="nome_do_pai"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Nome do pai
                                        </label>
                                        <div className="mt-1">
                                            <input type="text" 
                                            value={nome_do_pai}
                                            onChange={(event) => setNome_do_pai(event.target.value)}
                                            id="nome_do_pai"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                    <label htmlFor="nome_da_mae"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Nome da mae
                                        </label>
                                        <div className="mt-1">
                                            <input type="text" 
                                            value={nome_da_mae}
                                            onChange={(event) => setNome_da_mae(event.target.value)}
                                            id="nome_da_mae"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="data_de_nascimento"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            Data de Nascimento
                                        </label>
                                        <div className="mt-1">
                                            <input type="text" 
                                            value={data_de_nascimento}
                                            onChange={(event) => setData_de_nascimento(event.target.value)}
                                            id="data_de_nascimento"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required
                                            />
                                        </div>
                                    </div>

                                    <label htmlFor="cor_da_pele"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Cor da pele
                                        </label>
                                        <div className="mt-1">
                                            <input type="text" 
                                            value={cor_da_pele}
                                            onChange={(event) => setCor_da_pele(event.target.value)}
                                            id="cor_da_pele"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required
                                            />
                                        </div>

                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            )}
            
        </div>
    )
}