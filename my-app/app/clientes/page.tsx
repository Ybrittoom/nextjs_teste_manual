'use client'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    nome: '',
    endereco: '',
    nascimento: '',
    telefone: '',
    email: '',
    cpf: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
  
      const text = await response.text(); // Lê a resposta como texto
      console.log("Resposta do servidor:", text);
  
      try {
        const data = JSON.parse(text); // Tenta converter para JSON
        console.log("JSON recebido:", data);
      } catch (error) {
        console.error("Erro ao converter resposta para JSON:", error);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">Informações do cliente</h2>
          <p className="mt-1 text-sm text-gray-600">Coloque as informações seguintes:</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="nome" className="block text-sm font-medium text-gray-900">Nome</label>
              <div className="mt-2">
                <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="endereco" className="block text-sm font-medium text-gray-900">Endereço</label>
              <div className="mt-2">
                <input type="text" id="endereco" name="endereco" value={form.endereco} onChange={handleChange} required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="nascimento" className="block text-sm font-medium text-gray-900">Data de nascimento</label>
              <div className="mt-2">
                <input type="date" id="nascimento" name="nascimento" value={form.nascimento} onChange={handleChange} required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-900">Número de Telefone</label>
              <div className="mt-2">
                <input type="tel" id="telefone" name="telefone" value={form.telefone} onChange={handleChange} required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
              <div className="mt-2">
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-900">CPF</label>
              <div className="mt-2">
                <input type="text" id="cpf" name="cpf" value={form.cpf} onChange={handleChange} required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold text-gray-900">Cancelar</button>
        <button type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600">
          Salvar
        </button>
      </div>
    </form>
  );
}
