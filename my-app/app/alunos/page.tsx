'use client';

import { useEffect, useState } from 'react';
import { addAluno, getAluno, removeAluno, updateAluno } from '@/lib/alunos/aluno';

interface alunos {
  id: number;
  nome: string;
  nomePai: string;
  nomeMae: string;
  data_de_nascimento: string;
  corPele: string;
}

export default function Page() {
  const [alunos, setAlunos] = useState<alunos[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [nomePai, setNomePai] = useState('');
  const [nomeMae, setNomeMae] = useState('');
  const [data_de_nascimento, setdata_de_nascimento] = useState('');
  const [corPele, setCorPele] = useState('');

  const fetchAlunos = async () => {
    try {
      const data = await getAluno();
      setAlunos(data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  const handleEdit = ({
    id,
    nome,
    nomePai,
    nomeMae,
    data_de_nascimento,
    corPele
}: alunos) => {
    setId(id)
    setNome(nome)
    setNomePai(nomePai)
    setNomeMae(nomeMae)
    setdata_de_nascimento(data_de_nascimento)
    setCorPele(corPele)
    setIsModalOpen(true)
}

  const handleRemove = async ({
          id
      }: alunos) => {
          await removeAluno(id)
          fetchAlunos()
      }
  const closeModal = () => {
      setIsModalOpen(false)
  }

  const handleAlunoSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === 0) {
        await addAluno(nome, nomePai, nomeMae, data_de_nascimento, corPele);
      } else {
        await updateAluno(id, nome, nomePai, nomeMae, data_de_nascimento, corPele);
      }
      fetchAlunos();
      closeModal();
    } catch (error) {
      console.error('Erro ao salvar alunos:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Alunos</h1>

      <button onClick={() => handleEdit({ id: 0, nome: '', nomePai: '', nomeMae: '', data_de_nascimento: '', corPele: '' })} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
        Adicionar Novo Aluno
      </button>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Data de Nascimento</th>
            <th className="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (  
            <tr key={aluno.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{aluno.nome}</td>
              <td className="border px-4 py-2">{new Date(aluno.data_de_nascimento).toLocaleDateString('pt-BR')}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(aluno)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Editar</button>
                <button onClick={() => handleRemove(aluno)} className="bg-red-600 text-white px-3 py-1 rounded">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Cadastrar Aluno</h2>
            <form onSubmit={handleAlunoSubmit} className="space-y-4">
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={nomePai} onChange={(e) => setNomePai(e.target.value)} placeholder="Nome do Pai" className="w-full p-2 border rounded text-gray-900" />
              <input type="text" value={nomeMae} onChange={(e) => setNomeMae(e.target.value)} placeholder="Nome da Mãe" className="w-full p-2 border rounded text-gray-900" />
              <input type="date" value={data_de_nascimento} onChange={(e) => setdata_de_nascimento(e.target.value)} className="w-full p-2 border rounded text-gray-900" required />
              <input type="text" value={corPele} onChange={(e) => setCorPele(e.target.value)} placeholder="Cor da Pele" className="w-full p-2 border rounded text-gray-900" />
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