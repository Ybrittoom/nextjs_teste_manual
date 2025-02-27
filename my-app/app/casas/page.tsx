'use client'

import { useState } from "react"

export default async function Page() {
    const [tipo, setTipo] = useState('')
    const [endereco, setEndereco] = useState('')
    const [areaTerreno, setAreaTerreno] = useState('')
    const [areaConstruida, setAreaConstruida] = useState('')
    const [quartos, setQuartos] = useState('')
    const [banheiros, setBanheiros] = useState('')
    const [edicula, setEdicula] = useState(false)
    const [churrasqueira, setChurrasqueira] = useState(false)
    const [piscina, setPiscina] = useState(false)
    const [valorCondominio, setValorCondominio] = useState('')
    const [precoVenda, setPrecoVenda] = useState('')

    const handlSubmit = (event: any) => {
        event.preventDefault()
        addCasa()
    }

    return (
        <form onSubmit={handlSubmit}>
            <div className="spcae-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Casas</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Informaçoes sobre a casa</p>
                </div>

                

            </div>
        </form>
    )
}