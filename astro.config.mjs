import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next({
      baseLanguage: 'pt',
      i18next: {
        debug: true,
        supportedLngs: ['pt', 'en'],
      },
    }),
    tailwind(),
    icon(),
  ],
})
