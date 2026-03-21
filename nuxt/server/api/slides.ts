import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { SlideCard } from '~/types/SlideCard'

export default defineEventHandler(async (): Promise<SlideCard[]> => {
  const filePath = join(process.cwd(), 'public/slides.json')
  const json = await readFile(filePath, 'utf-8')
  return JSON.parse(json) as SlideCard[]
})