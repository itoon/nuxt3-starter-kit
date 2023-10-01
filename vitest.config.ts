import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        provider: 'v8'
      },
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*']
    }
  })
)
