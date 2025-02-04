export default async function Page() {
    return (
        <form>
            <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Informaçoes do cliente</h2>
            <p className="mt-1 text-sm/6 text-gray-600">Em caso de duvidas entre em contato</p>


        <div className="mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
            <label htmlFor="duvida" className="block text-sm/6 font-medium text-gray-900">Nos diga a sua duvida</label>
                <div className="mt-2">
                  <input type="text" name="first-name" id="duvida" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
            </div>

            <div className="sm:col-span-4">
                <label htmlFor="nome_cliente" className="block text-sm/6 font-medium text-gray-900">Seu nome para entrar em contato</label>
                <div className="mt-2">
                  <input id="nome_cliente" name="email" type="text" autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm-col-span-4">
                <label htmlFor="numero_cliente" className="block text-sm/6 font-medium text-gray-900">Numero de telefone</label>
                <div className="mt-2️">
                    <input type="number" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
              </div>

              <p>Ao enviar a sua duvidas, vamos analisar e entraremos em contato atravez do numero de telefone!</p>

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