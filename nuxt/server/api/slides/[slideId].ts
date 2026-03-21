import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { SlideCard } from '~/types/SlideCard'

export default defineEventHandler(async (event): Promise<SlideCard> => {
  const slideId = getRouterParam(event, 'slideId')

  const filePath = join(process.cwd(), 'public/slides.json')
  const json = await readFile(filePath, 'utf-8')
  const slides = JSON.parse(json) as SlideCard[]

  const slide: SlideCard | undefined = slides.find((s: SlideCard) => s.id === slideId)

  if (!slide) {
    throw createError({ statusCode: 404 })
  }

  return slide
})