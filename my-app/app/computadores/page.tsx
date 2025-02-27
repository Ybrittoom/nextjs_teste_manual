'use client'

import { useState } from "react"
import { addComputador } from "@/lib/computadores/computador"

export default function Page() {
    const [descricao, setDescricao] = useState('')
    const [cpu, setCpu] = useState('')
    const [memoria, setMemoria] = useState('')
    const [placaVideo, setPlacaVideo] = useState('')
    const [placaMae, setPlacaMae] = useState('')
    const [fonte, setFonte] = useState('')
    const [armazenamento, setArmazenamento] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()
        addComputador(descricao, cpu, memoria, placaVideo, placaMae, fonte, armazenamento)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Computadores</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Informações do computador</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="descricao" className="block text-sm/6 font-medium text-gray-900">Descrição</label>
                        <div className="mt-2">
                            <input type="text" value={descricao} onChange={(event) => setDescricao(event.target.value)} name="descricao" id="descricao" autoComplete="off" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="cpu" className="block text-sm/6 font-medium text-gray-900">CPU</label>
                        <div className="mt-2">
                            <input type="text" value={cpu} onChange={(event) => setCpu(event.target.value)} name="cpu" id="cpu" autoComplete="off" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="memoria" className="block text-sm/6 font-medium text-gray-900">Memória</label>
                        <div className="mt-2">
                            <input type="text" value={memoria} onChange={(event) => setMemoria(event.target.value)} name="memoria" id="memoria" autoComplete="off" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="placaVideo" className="block text-sm/6 font-medium text-gray-900">Placa de Vídeo</label>
                        <div className="mt-2">
                            <input type="text" value={placaVideo} onChange={(event) => setPlacaVideo(event.target.value)} name="placaVideo" id="placaVideo" autoComplete="off" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="placaMae" className="block text-sm/6 font-medium text-gray-900">Placa Mãe</label>
                        <div className="mt-2">
                            <input type="text" value={placaMae} onChange={(event) => setPlacaMae(event.target.value)} name="placaMae" id="placaMae" autoComplete="off" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="fonte" className="block text-sm/6 font-medium text-gray-900">Fonte</label>
                        <div className="mt-2">
                            <input type="text" value={fonte} onChange={(event) => setFonte(event.target.value)} name="fonte" id="fonte" autoComplete="off" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="armazenamento" className="block text-sm/6 font-medium text-gray-900">Armazenamento</label>
                        <div className="mt-2">
                            <input type="text" value={armazenamento} onChange={(event) => setArmazenamento(event.target.value)} name="armazenamento" id="armazenamento" autoComplete="off" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    )
}