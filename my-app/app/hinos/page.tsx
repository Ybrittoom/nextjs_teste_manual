'use client'


import { useState } from "react"
import { addHino } from "@/lib/hino/hino"

export default function Page() {
    const [titulo, setTitulo] = useState('titulo')
    const [numero, setNumero] = useState(0)
    const [letra, setLetra] = useState('letra') 

    const handleSubmit = (event) => {
        event.preventDefault()
        addHino( titulo, numero, letra )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Hinos</h2>
                    <p className="mt-1 text-sm text-gray-600">Informações do hino</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="titulo" className="block text-sm font-medium text-gray-900">Título</label>
                        <div className="mt-2">
                            <input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} id="titulo" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="numero" className="block text-sm font-medium text-gray-900">Número</label>
                        <div className="mt-2">
                            <input type="number" value={numero} onChange={(event) => setNumero(Number(event.target.value))} id="numero" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="letra" className="block text-sm font-medium text-gray-900">Letra</label>
                        <div className="mt-2">
                            <textarea value={letra} onChange={(event) => setLetra(event.target.value)} id="letra" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm" rows={4}></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold text-gray-900">Cancelar</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Salvar</button>
            </div>
        </form>
    )
}
