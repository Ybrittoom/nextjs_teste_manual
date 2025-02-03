export default async function Page() {
    return (
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">Informaçoes do cliente</h2>
            <p className="mt-1 text-sm/6 text-gray-600">Coloque as informaçoes seguintes:</p>
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="nome" className="block text-sm/6 font-medium text-gray-900">Nome</label>
                <div className="mt-2">
                  <input type="text" name="first-name" id="nome" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Sobrenome</label>
                <div className="mt-2">
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="cidade" className="block text-sm/6 font-medium text-gray-900">Cidade</label>
                <div className="mt-2 grid grid-cols-1">
                  <select id="cidade" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <option>Sao Paulo</option>
                    <option>Campinas</option>
                    <option>Sumare</option>
                    <option>Americana</option>
                    <option>Hortolandia</option>
                    <option>Santa Barbara do Oeste</option>
                  </select>
                  <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
  
              <div className="col-span-full">
                <label htmlFor="endereço" className="block text-sm/6 font-medium text-gray-900">Endereço</label>
                <div className="mt-2">
                  <input type="text" name="street-address" id="endereço" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
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