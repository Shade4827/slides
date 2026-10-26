// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import oxlint from 'eslint-plugin-oxlint'

export default withNuxt(
  {
    ignores: ['env.d.ts'],
  },
  ...oxlint.configs['flat/recommended'],
)
