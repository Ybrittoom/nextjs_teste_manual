'use client'

import { useState } from "react"
import { addFilme } from "@/lib/filmes/filme"

export default function Page() {
    const [nome, setNome] = useState('nome')    
    const [diretor, setDiretor] = useState('diretor')    
    const [assunto, setAssunto] = useState('assunto')    
    const [classificacao_etaria, setClassificacao_etaria] = useState('classificacao etaria') 
    const handlSubmit = (event: any) => {
        event.preventDefault()
        addFilme(nome, diretor, assunto, classificacao_etaria)
    }   
    
    return (
        <form onSubmit={handlSubmit}>
            <div className="spcae-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Filmes</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Informaçoes do Filme</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Nome do filme</label>
                        <div className="mt-2">
                            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} name="first-name" id="nome_filme" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Diretor</label>
                        <div className="mt-2">
                            <input type="text" value={diretor} onChange={(event) => setDiretor(event.target.value)} name="first-name" id="diretor" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">assunto</label>
                        <div className="mt-2">
                            <input type="text" value={assunto} onChange={(event) => setAssunto(event.target.value)} name="first-name" id="assunto" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">classificaçao etaria</label>
                        <div className="mt-2">
                            <input type="text" value={classificacao_etaria} onChange={(event) => setClassificacao_etaria(event.target.value)} name="first-name" id="classificacao_etaria" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
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