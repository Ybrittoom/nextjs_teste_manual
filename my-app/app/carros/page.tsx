'use client'

import { useState } from "react"
import { addCarro } from "@/lib/carros/carro"

//aqui ficara os imports

export default function Page() {
    
    //aqui ficara as constantes
    const [Fabricante, setFabricante] = useState('fabricante')
    const [modelo, setModelo] = useState('modelo')
    const [ano_de_fabricacao, setAno_de_fabricacao] = useState('ano de fabricante')
    const [cor, setCor] = useState('cor')
    const [quilometros_rodados, setQuilometros_rodados] = useState('quilometros rodados')    
    const handlSubmit = (event: any) => {
        event.preventDefault()
        addCarro(Fabricante, modelo, ano_de_fabricacao, cor, quilometros_rodados)
    }


    return (
        <form onSubmit={handlSubmit}>

            <div className="spcae-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Carro</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Informaçoes do produto</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Fabricante:</label>
                        <div className="mt-2">
                            <input type="text" value={Fabricante} onChange={(event) => setFabricante(event.target.value)} name="first-name" id="fabricante" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Modelo</label>
                        <div className="mt-2">
                            <input type="text" value={modelo} onChange={(event) => setModelo(event.target.value)} name="first-name" id="nome_produto" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Ano de Fabricaçao</label>
                        <div className="mt-2">
                            <input type="text" value={ano_de_fabricacao} onChange={(event) => setAno_de_fabricacao(event.target.value)} name="first-name" id="nome_produto" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">cor</label>
                        <div className="mt-2">
                            <input type="text" value={cor} onChange={(event) => setCor(event.target.value)} name="first-name" id="nome_produto" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Quilometros rodados</label>
                        <div className="mt-2">
                            <input type="text" value={quilometros_rodados} onChange={(event) => setQuilometros_rodados(event.target.value)} name="first-name" id="nome_produto" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
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