import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { get } from 'lodash'

export function theme(value: string) {
  const resolvedConfig = resolveConfig(tailwindConfig)

  return get(resolvedConfig.theme, value)
}
