import type { SlideCard } from '~/types/SlideCard'

const config = useRuntimeConfig()

export default defineEventHandler(async (event): Promise<SlideCard> => {
  const slideId = getRouterParam(event, 'slideId')
  const slides: SlideCard[] = await $fetch(`${config.public.siteUrl}/slides.json`)
  const slide: SlideCard | undefined = slides.find((s: SlideCard) => s.id === slideId)
  
  if (!slide) {
    throw createError({ statusCode: 404 })
  }

  return slide
})