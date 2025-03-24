'use client'

import { useEffect, useState } from "react";
import { addInstrutores, getInstrutores, removeInstrutor, updateInstrutores } from "@/lib/instrutores/instrutor";

interface Instrutor {
  id: number;
  nome: string;
  especialidade: string;
  data_nascimento: string;
  endereco: string;
  comum: string;
}

export default function Page() {
  const [instrutores, setInstrutores] = useState<Instrutor[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<number>(0);
  const [nome, setNome] = useState<string>('');
  const [especialidade, setEspecialidade] = useState<string>('');
  const [data_nascimento, setDataNascimento] = useState<string>('');
  const [endereco, setEndereco] = useState<string>('');
  const [comum, setComum] = useState<string>('');

  // Função para buscar instrutores
  const fetchInstrutores = async () => {
    try {
      const instrutoresList = await getInstrutores();
      setInstrutores(instrutoresList);
    } catch (error) {
      console.error('Erro ao buscar instrutores:', error);
    }
  };

  // useEffect para carregar os instrutores na inicialização da página
  useEffect(() => {
    fetchInstrutores();
  }, []);

  // Função para editar instrutor
  const handleEdit = (instrutor: Instrutor | null) => {
    if (instrutor) {
      setId(instrutor.id);
      setNome(instrutor.nome);
      setEspecialidade(instrutor.especialidade);
      setDataNascimento(instrutor.data_nascimento);
      setEndereco(instrutor.endereco);
      setComum(instrutor.comum);
    } else {
      setId(0);
      setNome('');
      setEspecialidade('');
      setDataNascimento('');
      setEndereco('');
      setComum('');
    }
    setIsModalOpen(true);
  };

  // Função para excluir instrutor
  const handleRemove = async (instrutor: Instrutor) => {
    try {
      await removeInstrutor(instrutor.id);
      fetchInstrutores();
    } catch (error) {
      console.error('Erro ao remover instrutor:', error);
    }
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setId(0);
    setNome('');
    setEspecialidade('');
    setDataNascimento('');
    setEndereco('');
    setComum('');
  };

  // Função para salvar ou atualizar instrutor
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (id === 0) {
        await addInstrutores(nome, especialidade, data_nascimento, endereco, comum);
      } else {
        await updateInstrutores(id, nome, especialidade, data_nascimento, endereco, comum);
      }
      fetchInstrutores();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar instrutores:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Instrutores</h1>

      {/* Botão para adicionar novo instrutor */}
      <button onClick={() => handleEdit(null)} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
        Adicionar Novo Instrutor
      </button>

      {/* Tabela de instrutores */}
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Especialidade</th>
            <th className="border px-4 py-2">Data de Nascimento</th>
            <th className="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {instrutores.map((instrutor) => (
            <tr 
            key={instrutor.id} 
            className="hover:bg-gray-100"
            >
                <td className="border px-4 py-2">{instrutor.nome}</td>
                <td className="border px-4 py-2">{instrutor.especialidade}</td>
                <td className="border px-4 py-2">{instrutor.data_nascimento}</td>
                <td className="border px-4 py-2">
                    <button onClick={() => handleEdit(instrutor)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Editar</button>
                    <button onClick={() => handleRemove(instrutor)} className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de edição e cadastro */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">{id === 0 ? 'Cadastrar Instrutor' : 'Editar Instrutor'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                placeholder="Nome" 
                required 
                className="w-full p-2 border rounded text-gray-900" 
              />
              <input 
                type="text" 
                value={especialidade} 
                onChange={(e) => setEspecialidade(e.target.value)} 
                placeholder="Especialidade" 
                required 
                className="w-full p-2 border rounded text-gray-900" 
              />
              <input 
                type="date" 
                value={data_nascimento} 
                onChange={(e) => setDataNascimento(e.target.value)} 
                required 
                className="w-full p-2 border rounded text-gray-900" 
              />
              <input 
                type="text" 
                value={endereco} 
                onChange={(e) => setEndereco(e.target.value)} 
                placeholder="Endereço" 
                required 
                className="w-full p-2 border rounded text-gray-900" 
              />
              <input 
                type="text" 
                value={comum} 
                onChange={(e) => setComum(e.target.value)} 
                placeholder="Comum" 
                className="w-full p-2 border rounded text-gray-900" 
              />
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={closeModal} className="bg-gray-400 text-white px-3 py-2 rounded">Cancelar</button>
                <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}