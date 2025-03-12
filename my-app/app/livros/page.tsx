'use client'

import { addLivro } from "@/lib/livros/livro"
import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('nome')
    const [autor, setAutor] = useState('autor')
    const [assunto, setAssunto] = useState('assunto')
    const [resumo, setResumo] = useState('resumo')
    const [data_de_lancamento, setData_de_lancamento] = useState('data de lançamento')
    const [preco_sugerido, setPreco_sugerido] = useState('preço sugerido')  
    const handlSubmit = (event: any) => {
        event.preventDefault()
        addLivro(nome, autor, assunto, resumo, data_de_lancamento, preco_sugerido)
    }  

    return (
        <form onSubmit={handlSubmit}>
            <div className="spcae-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Livro</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Informaçoes do livro</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Nome do livro</label>
                        <div className="mt-2">
                            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} name="first-name" id="nome_livro" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Autor</label>
                        <div className="mt-2">
                            <input type="text" value={autor} onChange={(event) => setAutor(event.target.value)} name="first-name" id="nome_autor" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">assunto</label>
                        <div className="mt-2">
                            <input type="text" value={assunto} onChange={(event) => setAssunto(event.target.value)} name="first-name" id="nome_assunto" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Resumo</label>
                        <div className="mt-2">
                            <input type="text" value={resumo} onChange={(event) => setResumo(event.target.value)} name="first-name" id="assunto" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">data de lançamento</label>
                        <div className="mt-2">
                            <input type="date" value={data_de_lancamento} onChange={(event) => setData_de_lancamento(event.target.value)} name="first-name" id="data_de_lancamento" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">preco sugerido</label>
                        <div className="mt-2">
                            <input type="number" value={preco_sugerido} onChange={(event) => setPreco_sugerido(event.target.value)} name="first-name" id="nome_produto" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
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