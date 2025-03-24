'use client'

import { useEffect, useState } from "react"
import { addCasa, getCasa, updateCasa, removeCasa } from "@/lib/casas/casa"
interface Casa {
    tipo: string,
    endereco: string,
    areaTerreno: number,
    areaConstruida: number,
    quartos: number,
    banheiros: number,
    edicula: boolean,
    churrasqueira: boolean,
    piscina: boolean,
    valorCondominio: number,
    precoVenda: number,
    id: number,
}
export default function Page() {
    const [_tipo, setTipo] = useState('tipo');
    const [_endereco, setEndereco] = useState('endereco');
    const [_areaTerreno, setAreaTerreno] = useState(1);
    const [_areaConstruida, setAreaConstruida] = useState(0);
    const [_quartos, setQuartos] = useState(0);
    const [_banheiros, setBanheiros] = useState(0);
    const [_edicula, setEdicula] = useState(false);
    const [_churrasqueira, setChurrasqueira] = useState(false);
    const [_piscina, setPiscina] = useState(false);
    const [_valorCondominio, setValorCondominio] = useState(0);
    const [_precoVenda, setPrecoVenda] = useState(0);
    const [_id, setId] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [casas, setCasas] = useState<Casa[]>([]);

    
    const fetchCasa = async () => {
        try {
            const data = await getCasa()
            setCasas(data)
        } catch (error) {
            console.error('Erro fetching carros', error)
        }
    }

    useEffect(() => {
        fetchCasa().then(()=>{ return ;})
    }, [])

    const handleEdit = ({
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

    }: Casa) => {
        setTipo(tipo)
        setEndereco(endereco)
        setAreaTerreno(areaTerreno)
        setAreaConstruida(areaConstruida)
        setQuartos(quartos)
        setBanheiros(banheiros)
        setEdicula(edicula)
        setChurrasqueira(churrasqueira)
        setPiscina(piscina)
        setValorCondominio(valorCondominio)
        setPrecoVenda(precoVenda)
        setId(id)
        setIsModalOpen(isModalOpen)
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
            if (_id === 0)
                await addCasa(
                    _tipo,
                    _endereco,
                    _areaTerreno,
                    _areaConstruida,
                    _quartos,
                    _banheiros,
                    _edicula,
                    _churrasqueira,
                    _piscina,
                    _valorCondominio,
                    _precoVenda
                )
            else
                await updateCasa(
                    _id,
                    _tipo,
                    _endereco,
                    _areaTerreno,
                    _areaConstruida,
                    _quartos,
                    _banheiros,
                    _edicula,
                    _churrasqueira,
                    _piscina,
                    _valorCondominio,
                    _precoVenda
                )
            fetchCasa()
            closeModal()
        } catch (error) {
            console.error(' Erro adding casa:', error)
        }
    }


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Cadastro de Casa</h1>

            <div className="mb-4">
                <button
                    onClick={() => handleEdit({
                        id: 0,
                        tipo: '',
                        endereco: '',
                        areaTerreno: 0,
                        areaConstruida: 0,
                        quartos: 0,
                        banheiros: 0,
                        edicula: false,
                        churrasqueira: false,
                        piscina: false,
                        valorCondominio: 0,
                        precoVenda: 0
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
                            <div className="spcae-y-4">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-2">
                                    <div>
                                        <label htmlFor="tipo"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            Tipo
                                        </label>
                                        <div className="mt-1">
                                            <input type="text"
                                                value={_tipo}
                                                onChange={(event) => setTipo(event.target.value)}
                                                id="tipo"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                                required />
                                        </div>
                                    </div>


                                    <div>
                                        <label htmlFor="endereco"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            endereco
                                        </label>
                                        <div className="mt-1">
                                            <input type="text"
                                                value={_endereco}
                                                onChange={(event) => setEndereco(event.target.value)}
                                                id="endereco"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                                required />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="AreaTerreno "
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            Area Terreno
                                        </label>
                                        <div className="mt-1">
                                            {JSON.stringify(_areaTerreno)}
                                            <input type="number"
                                                value={_areaTerreno || 0}
                                                defaultValue={0}
                                                onChange={(event) => {
                                                    console.log(event.target.value);
                                                    console.log(parseInt(event.target.value || '0'));
                                                    setAreaTerreno(parseInt(event.target.value || '0'))
                                                }}
                                                id="AreaTerreno "
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                                required />
                                        </div>
                                    </div>

                                    {/* <div>
                                        <label htmlFor="areaConstruida"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            area Construida
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={areaConstruida}
                                            onChange={(event) => setAreaConstruida(event.target.valueAsNumber)}
                                            id="areaConstruida"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="quartos"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            quartos
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={quartos}
                                            onChange={(event) => setQuartos(event.target.valueAsNumber)}
                                            id="quartos"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="banheiros"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            banheiros
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={banheiros}
                                            onChange={(event) => setBanheiros(event.target.valueAsNumber)}
                                            id="banheiros"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="edicula"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            edicula
                                        </label>
                                        <div className="mt-1">
                                            <input type="checkbox" 
                                            checked={edicula}
                                            onChange={(event) => setEdicula(event.target.checked)}
                                            id="edicula"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="churrasqueira"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            churrasqueira
                                        </label>
                                        <div className="mt-1">
                                            <input type="checkbox" 
                                            checked={churrasqueira}
                                            onChange={(event) => setChurrasqueira(event.target.checked)}
                                            id="churrasqueira"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="piscina"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            piscina
                                        </label>
                                        <div className="mt-1">
                                            <input type="checkbox" 
                                            checked={piscina}
                                            onChange={(event) => setPiscina(event.target.checked)}
                                            id="piscina"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="valorCondominio"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            valor Condominio
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={valorCondominio}
                                            onChange={(event) => setValorCondominio(event.target.valueAsNumber)}
                                            id="valorCondominio"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="precoVenda"
                                        className="block text-sm font-medium text-gray-900"
                                        >
                                            preco Venda
                                        </label>
                                        <div className="mt-1">
                                            <input type="number" 
                                            value={precoVenda}
                                            onChange={(event) => setPrecoVenda(event.target.valueAsNumber)}
                                            id="precoVenda"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            required/>
                                        </div>
                                    </div> */}


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