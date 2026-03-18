import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

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

  const content = fs.readFileSync(slideMd, 'utf-8')
  const titleMatch = content.match(/^#\s+(.*)/m)

  const title = titleMatch ? titleMatch[1] : dir

  slides.push({
    id: dir,
    title,
    url: `/${dir}/`,
  })
}

fs.writeFileSync(JSON_PATH, JSON.stringify(slides, null, 2))

console.log('slides.json generated!')
