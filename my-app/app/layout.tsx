import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className="bg-gray-100">
      <div className="flex">
        <aside className="w-64 h-screen bg-gray-800 text-gray-100">
          <div className="p-4 text-xl font-semibold border-b border-gray-700">
            My Sidebar
          </div>
          <nav className="mt-4">
            <ul>
              <li>
                <a href="clientes" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  clientes
                </a>
              </li>
              <li>
                <a href="produtos" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  produtos
                </a>
              </li>
              <li>
                <a href="carros" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  carro
                </a>
              </li>
              <li>
                <a href="instrutores" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  Intrutores
                </a>
              </li>
              <li>
                <a href="alunos" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  Alunos 
                </a>
              </li>

              <li>
                <a href="materias" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  Materias 
                </a>
              </li>

              <li>
                <a href="livros" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                   livros
                </a>
              </li>
              <li>
                <a href="filmes" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                   filmes
                </a>
              </li>

              <li>
                <a href="pneus" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                   pneus
                </a>
              </li>

              <li>
                <a href="instrumentos" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                   instrumentos
                </a>
              </li>

              <li>
                <a href="computadores" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  computadores
                </a>
              </li>

              <li>
                <a href="casas" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  casas
                </a>
              </li>

            </ul>
          </nav>
        </aside>
    
        <main className="flex-1 p-8">
        {children}
    
        </main>
      </div>
    
    </body>
    </html>
  );
}