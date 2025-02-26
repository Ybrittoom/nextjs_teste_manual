'use client'

import { addAluno } from "@/lib/alunos/aluno"
import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('nome')    
    const [nome_do_pai, setNome_do_pai] = useState('nome do pai')
    const [nome_da_mae, setNome_da_mae] = useState('nome da mae')
    const [data_de_nascimento, setData_de_nascimento] = useState('data de nascimento')
    const [cor_da_pele, setCor_da_pele] = useState('cor da pele')
    const handlSubmit = (event: any) => {
        event.preventDefault()
        addAluno(nome , nome_do_pai , nome_da_mae, data_de_nascimento , cor_da_pele)
    }    

    return (
        <form onSubmit={handlSubmit}>
            <div className="spcae-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Alunos</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Informaçoes do Alunos</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Nome do Alunos</label>
                        <div className="mt-2">
                            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} name="first-name" id="nome_aluno" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Nome do Pai</label>
                        <div className="mt-2">
                            <input type="text" value={nome_do_pai} onChange={(event) => setNome_do_pai(event.target.value)} name="first-name" id="nome_do_pai" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Nome do Pai</label>
                        <div className="mt-2">
                            <input type="text" value={nome_da_mae} onChange={(event) => setNome_da_mae(event.target.value)} name="first-name" id="nome_do_mae" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Data de Nascimento</label>
                        <div className="mt-2">
                            <input type="date" value={data_de_nascimento} onChange={(event) => setData_de_nascimento(event.target.value)} name="first-name" id="data_de_nascimento" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome_produto" className="block text-sm/6 font-medium text-gray-900">Cor de pele</label>
                        <div className="mt-2">
                            <input type="text" value={cor_da_pele} onChange={(event) => setCor_da_pele(event.target.value)} name="first-name" id="cor_da_pele" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>

            </div>
        </form>
    )
}