import { existsSync, readFileSync, writeFileSync } from 'fs';
import { ObjectId } from "mongodb";
export default class PostData {
  constructor(
    public name: string, 
    public price: number, 
    public category: string, 
    public id?: ObjectId
  ) {}
}
export async function getPosts(){
  'use server'
  if(!existsSync('db.json')){
    writeFileSync('db.json', JSON.stringify([]));
  }
  const posts = JSON.parse(readFileSync('db.json').toString('utf-8'));
  return posts
}