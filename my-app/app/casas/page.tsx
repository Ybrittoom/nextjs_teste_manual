'use client'

import { useEffect, useState } from "react"
import { addCasa, updateCasa, getCasas, removeCasa } from "@/lib/casas/casa"

interface Casa {
    id: number;
    tipo: string;
    endereco: string;
    areaterreno: number;
    areaconstruida: number;
    quartos: number;
    banheiros: number;
    edicula: boolean;
    churrasqueira: boolean;
    piscina: boolean;
    valorcondominio: number;
    precovenda: number;
}

export default function Page() {
    const [tipo, setTipo] = useState('tipo');
    const [endereco, setEndereco] = useState('endereco');
    const [areaTerreno, setAreaTerreno] = useState(0);
    const [areaConstruida, setAreaConstruida] = useState(0);
    const [quartos, setQuartos] = useState(0);
    const [banheiros, setBanheiros] = useState(0);
    const [edicula, setEdicula] = useState(false);
    const [churrasqueira, setChurrasqueira] = useState(false);
    const [piscina, setPiscina] = useState(false);
    const [valorCondominio, setValorCondominio] = useState(0);
    const [precoVenda, setPrecoVenda] = useState(0);
    const [id, setId] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [casas, setCasas] = useState<Casa[]>([]);

    const fetchCasa = async () => {
        try {
            const data = await getCasas()
            setCasas(data)
        } catch (error) {
            console.error('Erro fetching clientes', error)
        }
    }

    useEffect(() => {
        fetchCasa()
    }, [])

    const handleEdit = ({
        id,
        tipo,
        endereco,
        areaterreno,
        areaconstruida,
        quartos,
        banheiros,
        edicula,
        churrasqueira,
        piscina,
        valorcondominio,
        precovenda

    }: Casa) => {
        console.log(casas)
        setId(id)
        setTipo(tipo || '')
        setEndereco(endereco || '')
        setAreaTerreno(areaTerreno || 0)
        setAreaConstruida(areaConstruida || 0)
        setQuartos(quartos || 0)
        setBanheiros(banheiros || 0)
        setEdicula(!!edicula)
        setChurrasqueira(!!churrasqueira)
        setPiscina(!!piscina)
        setValorCondominio(valorCondominio || 0)
        setPrecoVenda(precoVenda || 0)
        setIsModalOpen(true)
    }

    const handleRemove = async ({
            id
        }: Casa) => {
            await removeCasa(id)
            fetchCasa()
        }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if(id === 0)
                await addCasa(
                    tipo,
                    endereco,
                    areaTerreno,
                    areaConstruida,
                    quartos,
                    banheiros,
                    edicula,
                    churrasqueira,
                    piscina,
                    valorCondominio,
                    precoVenda
                )
            else 
                await updateCasa(
                    id,
                    tipo,
                    endereco,
                    areaTerreno,
                    areaConstruida,
                    quartos,
                    banheiros,
                    edicula,
                    churrasqueira,
                    piscina,
                    valorCondominio,
                    precoVenda
                )

            fetchCasa()
            closeModal()
        } catch (error) {
            console.error(' Erro adding casa:', error)
        }
    }
    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Casa</h1>

            <div className="mb-4">
                <button
                onClick={() => handleEdit({
                    id: 0,
                    tipo: '',
                    endereco: '',
                    areaterreno: 0,
                    areaconstruida: 0,
                    quartos: 0,
                    banheiros: 0,
                    edicula: false,
                    churrasqueira: false,
                    piscina: false,
                    valorcondominio: 0,
                    precovenda: 0
                })}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Adicionar nova Casa
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Tipo</th>
                            <th className="border px-4 py-2">Endereço</th>
                            <th className="border px-4 py-2">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {casas.map((casa) => (
                            <tr
                            key={casa.id}
                            className="hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="border px-4 py-2">{casa.tipo}</td>
                                <td className="border px-4 py-2">{casa.endereco}</td>
                                <td className="border px-4 py-2">
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleEdit(casa)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                    className="rounded-mb bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleRemove(casa)}
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
                            Nova Casa
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            Tipo
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text" 
                                            name="tipo" 
                                            id="tipo" 
                                            value={tipo}
                                            onChange={(event) => setTipo(event.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            endereco
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="text" 
                                            name="endereco" 
                                            id="endereco" 
                                            value={endereco}
                                            onChange={(event) => setEndereco(event.target.value)}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            area Terreno
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="number" 
                                            name="areaTerreno" 
                                            id="areaTerreno" 
                                            value={areaTerreno}
                                            onChange={(event) => setAreaTerreno(Number(event.target.value))}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            area Construida
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="number" 
                                            name="areaConstruida" 
                                            id="areaConstruida" 
                                            value={areaConstruida}
                                            onChange={(event) => setAreaConstruida(Number(event.target.value))}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            quartos
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="number" 
                                            name="quartos" 
                                            id="quartos" 
                                            value={quartos}
                                            onChange={(event) => setQuartos(Number(event.target.value))}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            banheiros
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="number" 
                                            name="banheiros" 
                                            id="banheiros" 
                                            value={banheiros}
                                            onChange={(event) => setBanheiros(Number(event.target.value))}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            edicula
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="checkbox" 
                                            name="edicula" 
                                            id="edicula" 
                                            checked={edicula}
                                            onChange={(event) => setEdicula(event.target.checked)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            churrasqueira
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="checkbox" 
                                            name="churrasqueira" 
                                            id="churrasqueira" 
                                            checked={churrasqueira}
                                            onChange={(event) => setChurrasqueira(event.target.checked)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            piscina
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="checkbox" 
                                            name="piscina" 
                                            id="piscina" 
                                            checked={piscina}
                                            onChange={(event) => setPiscina(event.target.checked)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            valor do Condominio
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="number" 
                                            name="valorCondominio" 
                                            id="valorCondominio" 
                                            value={valorCondominio}
                                            onChange={(event) => setValorCondominio(Number(event.target.value))}
                                            required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor=""
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            preco de Venda
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            type="number" 
                                            name="precoVenda" 
                                            id="precoVenda" 
                                            value={precoVenda}
                                            onChange={(event) => setPrecoVenda(Number(event.target.value))}
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