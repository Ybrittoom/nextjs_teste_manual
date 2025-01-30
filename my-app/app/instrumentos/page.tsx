
export default async function Page() {
 
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive email 📩</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">Nome do Instrumento:</label>
              <div className="mt-2">
                <input type="text" name="first-name" id="nome_instrumento" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
              </div>
            </div>
          </div>
    
          <div className="sm:col-span-3">
              <label htmlFor="tipo_instrumento" className="block text-sm/6 font-medium text-gray-900">Tipo de Instrumento</label>
              <div className="mt-2 grid grid-cols-1">
                <select id="tipo_instrumento" name="tipo_instrumento" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <option>Cordas</option> 
                  <option>Madeira</option>
                  <option>Metais</option>
                </select>
                <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

          <div className="col-span-full">
            <label htmlFor="Marca_do_instrumento" className="block text-sm/6 font-medium text-gray-900"> Marca do instrumento:</label>
            <div className="mt-2">
              <input type="text" name="Marca_do_instrumento" id="Marca_do_instrumento" autoComplete="Marca_do_instrumento" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="modelo_do_instrumento" className="block text-sm/6 font-medium text-gray-900">Modelo do instrumento:</label>
            <div className="mt-2">
              <input type="text" name="modelo_do_instrumento" id="modelo_do_instrumento" autoComplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

        </div>
      </div>

      <div className="border-b border-gary-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gary-900">Caracteristicas Sonoras</h2>
          <p className="mt-1 text-sm/6 text-gray-600">Coloque as Caracteristicas do seu instrumento🎻🎷🎹</p>  

            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input id="tom_do" name="tom_do" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="tom_do" className="block text-sm/6 font-medium text-gray-900">Do</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="tom_sib" name="tom_sib" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="tom_sib" className="block text-sm/6 font-medium text-gray-900">Sib</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="tom_mib" name="tom_mib" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="tom_mib" className="block text-sm/6 font-medium text-gray-900">Mib</label>
                </div>
              </div>

              <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
              <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input id="push-everything" name="push-notifications" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">Everything</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">Same as email</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="push-nothing" name="push-notifications" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">No push notifications</label>
                </div>
              </div>

            </fieldset>
      </div>

      <div className="border-b border-gary-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gary-900">Condiçoes do instrumento✨</h2>

            <fieldset>
              <div className="mt-6 space-y-6">
                <h2>Estado geral:</h2>
                <div className="flex items-center gap-x-3">
                  <input id="estado_novo" name="estado_novo" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="estado_novo" className="block text-sm/6 font-medium text-gray-900">Novo</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="estado_seminovo" name="estado_seminovo" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="estado_seminovo" className="block text-sm/6 font-medium text-gray-900">Seminovo</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="estado_usado" name="estado_usado" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="estado_usado" className="block text-sm/6 font-medium text-gray-900">Usado</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="estado_reparo" name="estado_reparo" type="radio" className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"/>
                  <label htmlFor="estado_reparo" className="block text-sm/6 font-medium text-gray-900">Necessita de reparos</label>
                </div>
              </div>
            </fieldset>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
  )
}