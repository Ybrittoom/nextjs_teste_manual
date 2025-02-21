/* eslint-disable @typescript-eslint/no-unused-vars */
// import the Request and Response classes

import { NextResponse} from 'next/server'
import {pool} from '@/lib/db'
import { config } from 'dotenv';
config();
// define and export the GET handler function

export async function GET(request: Request) {
  // this is going to be my JSON response
  // const res = await pool.query("select * from produtos where id = ?", [2]);
  const id = 1;
  const res = await pool.query(`select * from produto where id = ${id}`);

  return NextResponse.json(res)
}
