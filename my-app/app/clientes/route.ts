import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { name, email } = await req.json();
    try {
        const user = await prisma.user.create({ data: { name, email } });
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao cadastrar usuário' }, { status: 500 });
    }
}
