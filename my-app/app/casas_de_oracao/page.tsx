'use client'

    
import { useEffect, useState } from "react";
import { addCasaOracao, getCasas_de_oracao, removeComum, updateComum } from "@/lib/casa_de_oracao/casa_de_oracao";

interface Casa_de_Oracao {
    id: number;
    nome: string;
    endereco: string;
    anciao: string;
    telefone_anciao: string;
    cooperador: string;
    telefone_cooperador: string;
    cooperador_de_jovens: string;
    telefone_cooperador_de_jovens: string;
    diacono: string;
    telefone_diacono: string;
    ultimaSantaCeia: number;
}

export default function Page() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [anciao, setAnciao] = useState('');
    const [telefone_anciao, setTelefone_anciao] = useState('');
    const [cooperador, setCooperador] = useState('');
    const [telefone_cooperador, setTelefone_cooperador] = useState('');
    const [cooperadorJovens, setCooperadorJovens] = useState('');
    const [telefone_cooperador_de_Jovens, setTelefone_cooperador_de_jovens] = useState('');
    const [diacono, setDiacono] = useState('');
    const [telefone_diacono, setTelefone_diacono] = useState('');
    const [ultimaSantaCeia, setUltimaSantaCeia] = useState(0);
    const [id, setId] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [casas_de_oracao, setCasas_de_oracao] = useState<Casa_de_Oracao[]>([])

    const fetchCasas_de_oracao = async () => {
        try {
            const data = await getCasas_de_oracao()
            setCasas_de_oracao(data)
        } catch (error) {
            console.error('Erro fetching comum', error)
        }
    }

    useEffect(() => {
        fetchCasas_de_oracao()
    }, [])

    const handleEdit = ({
        id,
        nome,
        endereco,
        anciao,
        telefone_anciao,
        cooperador,
        telefone_cooperador,
        cooperadorJovens,
        telefone_cooperador_de_jovens,
        diacono,
        telefone_diacono,
        ultimaSantaCeia

    }: Casa_de_Oracao) => {
        setId(id)
        setNome(nome)
        setEndereco(endereco)
        setAnciao(anciao)
        setTelefone_anciao(telefone_anciao)
        setCooperador(cooperador)
        setTelefone_cooperador(telefone_cooperador)
        setCooperadorJovens(cooperadorJovens)
        setTelefone_cooperador_de_jovens(telefone_cooperador_de_jovens)
        setDiacono(diacono)
        setTelefone_diacono(telefone_diacono)
        setUltimaSantaCeia(ultimaSantaCeia)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Casa_de_Oracao) => {
            await removeComum(id)
            fetchCasas_de_oracao()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addCasaOracao(
                    nome,
                    endereco,
                    anciao,
                    telefone_anciao,
                    cooperador,
                    telefone_cooperador,
                    cooperadorJovens,
                    telefone_cooperador_de_Jovens,
                    diacono,
                    telefoneDiacono,
                    ultimaSantaCeia
                )
            else 
                await updateComum(
                    id,
                    nome,
                    endereco,
                    anciao,
                    telefone_Anciao,
                    cooperador,
                    telefoneCooperador,
                    cooperadorJovens,
                    telefoneCooperadorJovens,
                    diacono,
                    telefoneDiacono,
                    ultimaSantaCeia
                )

            fetchCasas_de_oracao()
            closeModal()
        } catch (error) {
            console.error(' Erro adding comum:', error)
        }
    }
    


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Casa de Oracao</h1>

            <div className="mb-4">
                <button 
                onClick={() => handleEdit({
                    id: 0,
                    nome: '',
                    endereco: '',
                    anciao: '',
                    telefone_Anciao: '',
                    cooperador: '',
                    telefoneCooperador: '',
                    cooperadorJovens: '',
                    telefoneCooperadorJovens: '',
                    diacono: '',
                    telefoneDiacono: '',
                    ultimaSantaCeia: 0
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar Casa de Oracao
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Endereço</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {casas_de_oracao.map((comum) => (
                            <tr 
                            key={comum.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{comum.nome}</td>
                                <td className="border px-4 py-2">{comum.endereco}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(comum)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(comum)}
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
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md">
                        <h2 className="text-base font-semibold text-gray-900 md-4">
                            Nova Casa de Oracao
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            nome
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="nome"
                                            id="nome"
                                            value={nome}
                                            onChange={(event) => setNome(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            endereço
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="endereco"
                                            id="endereco"
                                            value={endereco}
                                            onChange={(event) => setEndereco(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            anciao
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="anciao"
                                            id="anciao"
                                            value={anciao}
                                            onChange={(event) => setAnciao(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            telefone Anciao
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="telefone_Anciao"
                                            id="telefone_Anciao"
                                            value={telefone_Anciao}
                                            onChange={(event) => setTelefone_Anciao(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            cooperador
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="cooperador"
                                            id="cooperador"
                                            value={cooperador}
                                            onChange={(event) => setCooperador(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            telefone Cooperador
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="telefoneCooperador"
                                            id="telefoneCooperador"
                                            value={telefoneCooperador}
                                            onChange={(event) => setTelefoneCooperador(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            cooperador Jovens
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="cooperadorJovens"
                                            id="cooperadorJovens"
                                            value={cooperadorJovens}
                                            onChange={(event) => setCooperadorJovens(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            telefone Cooperador Jovens
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="telefoneCooperadorJovens"
                                            id="telefoneCooperadorJovens"
                                            value={telefoneCooperadorJovens}
                                            onChange={(event) => setTelefoneCooperadorJovens(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            diacono
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="diacono"
                                            id="diacono"
                                            value={diacono}
                                            onChange={(event) => setDiacono(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            telefone Diacono
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="telefoneDiacono"
                                            id="telefoneDiacono"
                                            value={telefoneDiacono}
                                            onChange={(event) => setTelefoneDiacono(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-"
                                        >
                                            ultima Santa Ceia
                                        </label>
                                        <div>
                                            <input 
                                            type="text"
                                            name="ultimaSantaCeia"
                                            id="ultimaSantaCeia"
                                            value={ultimaSantaCeia}
                                            onChange={(event) => setUltimaSantaCeia(event.target.value)}
                                            required
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
