import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { nome, endereco, nascimento, telefone, email, cpf } = await req.json();
        const novoCliente = await prisma.cliente.create({
            data: { nome, endereco, nascimento: new Date(nascimento), telefone, email, cpf }
        });

        return NextResponse.json(novoCliente, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao criar cliente' }, { status: 500 });
    }
}
