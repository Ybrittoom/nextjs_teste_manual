'use client'

import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('nome')    
    const [nome_do_pai, setNome_do_pai] = useState('nome do pai')
    const [nome_da_mae, setNome_da_mae] = useState('nome da mae')
    const [] = useState('')
    const [] = useState('')
    const handlSubmit = (event: any) => {
        event.preventdefault()
        addAluno()
    }    
}