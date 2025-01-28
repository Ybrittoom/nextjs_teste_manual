import { existsSync, readFileSync, writeFileSync } from "fs";

export async function getPosts() {
  'user server'
  if (!existsSync('db.json')) {
    writeFileSync('db.json', JSON.stringify([]))
  } 
  const posts = JSON.parse(readFileSync('db.json').toString('utf-8'))
  return posts
}