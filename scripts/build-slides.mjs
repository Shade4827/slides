import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import matter from 'gray-matter'

const ROOT = process.cwd()
const SLIDES_DIR = path.join(ROOT, 'slides/slides')
const OUTPUT_DIR = path.join(ROOT, 'nuxt/public/slides')
const JSON_PATH = path.join(ROOT, 'nuxt/public/slides.json')

const slides = []

const dirs = fs.readdirSync(SLIDES_DIR)

for (const dir of dirs) {
  const fullPath = path.join(SLIDES_DIR, dir)
  const slideMd = path.join(fullPath, 'slides.md')

  if (!fs.existsSync(slideMd)) continue

  console.log(`Building slide: ${dir}`)

  execSync(
    `pnpm slidev build ${slideMd} --base /slides/${dir}/ --out ${OUTPUT_DIR}/${dir} --without-notes`,
    { stdio: 'inherit' }
  )

  const thumbnailPath = path.join(OUTPUT_DIR, dir, 'thumbnail')

  execSync(
    `pnpm slidev export ${slideMd} --format png --range 1 --output ${thumbnailPath}`,
    { stdio: 'inherit' }
  )

  const content = fs.readFileSync(slideMd, 'utf-8')
  const { data } = matter(content)
  const title = data.title || dir
  const info = data.info || ''

  slides.push({
    id: dir,
    title,
    link: dir,
    thumbnail: `/slides/${dir}/thumbnail/1.png`,
    info
  })
}

fs.writeFileSync(JSON_PATH, JSON.stringify(slides, null, 2))

console.log('slides.json generated!')
