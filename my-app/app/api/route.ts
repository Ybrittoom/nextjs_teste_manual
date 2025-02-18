import { NextResponse } from "next/server";
import { pool } from '@/lib/db'
import { config } from "dotenv";
config()

export async function GET(request: Request) {
    const id = 1;
    const res = await pool.query(`select * from produtos where id = ${id}`)

    return NextResponse.json(res)
}