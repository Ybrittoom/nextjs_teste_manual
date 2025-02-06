import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { name, price } = await req.json();
    try {
        const product = await prisma.product.create({ data: { name, price } });
        return NextResponse.json(product, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao cadastrar produto' }, { status: 500 });
    }
}
