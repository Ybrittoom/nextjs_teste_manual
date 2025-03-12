'use client'

import { useState } from "react"
import { addPneu } from "@/lib/pneus/pneu"

export default function Page() {
    const [ marca, setMarca] = useState('marca')    
    const [ modelo, setModelo] = useState('modelo')
    const [ largura, setLargura] = useState(0)
    const [ raio, setRaio] = useState(0)
    const [ especura, setEspecura] = useState(0)
    const [ carga_maxima, setCarga_maxima] = useState(0)   
    const handlSubmit = (event: any) => {
        event.preventDefault()
        addPneu(marca, modelo, largura, raio, especura, carga_maxima)
    }

    return (
        <form onSubmit={handlSubmit}>
            <div className="spcae-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Pneu</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Informaçoes do pneu</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Marca</label>
                        <div className="mt-2">
                            <input type="text" value={marca} onChange={(event) => setMarca(event.target.value)} name="first-name" id="marca" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">modelo</label>
                        <div className="mt-2">
                            <input type="text" value={modelo} onChange={(event) => setModelo(event.target.value)} name="first-name" id="moedelo" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">largura</label>
                        <div className="mt-2">
                            <input type="number" value={largura} onChange={(event) => setLargura(event.target.value)} name="first-name" id="largura" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">raio</label>
                        <div className="mt-2">
                            <input type="number" value={raio} onChange={(event) => setRaio(event.target.value)} name="first-name" id="raio" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">espeçura</label>
                        <div className="mt-2">
                            <input type="number" value={especura} onChange={(event) => setEspecura(event.target.value)} name="first-name" id="especura" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">carga maxima</label>
                        <div className="mt-2">
                            <input type="number" value={carga_maxima} onChange={(event) => setCarga_maxima(event.target.value)} name="first-name" id="raio" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
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