import type { SlideCard } from '~/types/SlideCard'

const config = useRuntimeConfig()

export default defineEventHandler(async (): Promise<SlideCard[]> => {
  const slides: SlideCard[] = await $fetch(`${config.public.siteUrl}/slides.json`)
  return slides
})