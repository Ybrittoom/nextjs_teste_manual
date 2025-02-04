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
                <a href="instrumentos" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  instrumentos
                </a>
              </li>
              <li>
                <a href="clientes" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  clientes
                </a>
              </li>
              <li>
                <a href="ajuda" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14"></path>
                  </svg>
                  ajuda
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