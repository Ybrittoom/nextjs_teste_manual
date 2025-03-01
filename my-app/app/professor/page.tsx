'use client'

import { addProfessor } from "@/lib/professores/professor"
import { useState } from "react"

export default function ProfessoresPage() {
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addProfessor( nome, endereco, especialidade, telefone, email )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Professores</h2>
                    <p className="mt-1 text-sm text-gray-600">Informações do professor</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-900">Nome</label>
                        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} id="nome" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900"/>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="endereco" className="block text-sm font-medium text-gray-900">Endereço</label>
                        <input type="text" value={endereco} onChange={(event) => setEndereco(event.target.value)} id="endereco" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900"/>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="especialidade" className="block text-sm font-medium text-gray-900">Especialidade</label>
                        <input type="text" value={especialidade} onChange={(event) => setEspecialidade(event.target.value)} id="especialidade" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900"/>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-900">Telefone</label>
                        <input type="text" value={telefone} onChange={(event) => setTelefone(event.target.value)} id="telefone" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900"/>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">E-mail</label>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} id="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900"/>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white">Salvar Professor</button>
            </div>
        </form>
    )
}
