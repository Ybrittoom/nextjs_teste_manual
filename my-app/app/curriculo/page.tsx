'use client'


import { useState } from "react"
import { addCurriculo } from "@/lib/curriculo/curriculo"

export default function Page() {
    const [nome, setNome] = useState('nome')
    const [endereco, setEndereco] = useState('endereco')
    const [curriculo, setCurriculo] = useState('curriculo') 
    const [habilidades, setHabilidades] = useState('habilidade')

    const handleSubmit = (event) => {
        event.preventDefault()
        addCurriculo({ nome, endereco, curriculo, habilidades })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Currículos</h2>
                    <p className="mt-1 text-sm text-gray-600">Informações do currículo</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-900">Nome</label>
                        <div className="mt-2">
                            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} id="nome" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="endereco" className="block text-sm font-medium text-gray-900">Endereço</label>
                        <div className="mt-2">
                            <input type="text" value={endereco} onChange={(event) => setEndereco(event.target.value)} id="endereco" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="curriculo" className="block text-sm font-medium text-gray-900">Currículo</label>
                        <div className="mt-2">
                            <input type="text" value={curriculo} onChange={(event) => setCurriculo(event.target.value)} id="curriculo" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="habilidades" className="block text-sm font-medium text-gray-900">Habilidades</label>
                        <div className="mt-2">
                            <input type="text" value={habilidades} onChange={(event) => setHabilidades(event.target.value)} id="habilidades" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"/>
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
