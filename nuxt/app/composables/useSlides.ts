import type { SlideCard } from '~/types/SlideCard'

type AssetFetcher = {
  fetch: (request: Request) => Promise<Response>
}

export function useSlides() {
  return useAsyncData('slides', () => loadSlides())
}

async function loadSlides(): Promise<SlideCard[]> {
  if (import.meta.server) {
    const slides = (await readSlidesFromAssets()) ?? (await readSlidesFromDisk())
    if (!slides) {
      throw createError({
        statusCode: 404,
        statusMessage: 'slides.json was not generated',
      })
    }
    return slides
  }

  return $fetch<SlideCard[]>(`/slides.json?t=${Date.now()}`)
}

async function readSlidesFromAssets(): Promise<SlideCard[] | undefined> {
  const event = useRequestEvent()
  const cloudflare = event?.context.cloudflare as { env?: { ASSETS?: AssetFetcher } } | undefined
  const assets = cloudflare?.env?.ASSETS
  if (!assets) return undefined

  const url = new URL(useRequestURL().href)
  url.pathname = '/slides.json'
  url.search = ''
  const response = await assets.fetch(new Request(url))
  if (!response.ok) return undefined
  return response.json() as Promise<SlideCard[]>
}

async function readSlidesFromDisk(): Promise<SlideCard[] | undefined> {
  try {
    const { readFile } = await import('node:fs/promises')
    const { join } = await import('node:path')
    const json = await readFile(join(process.cwd(), 'public', 'slides.json'), 'utf8')
    return JSON.parse(json) as SlideCard[]
  } catch {
    return undefined
  }
}
