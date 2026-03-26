export const useApiFetch = () => {
  const config = useRuntimeConfig()
  
  const apiFetch = $fetch.create({
    baseURL: config.public.siteUrl
  })

  return {
    apiFetch
  }
}