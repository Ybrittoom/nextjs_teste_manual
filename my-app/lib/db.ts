import { Pool } from 'pg';
import { config } from "dotenv";

config();

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
});

