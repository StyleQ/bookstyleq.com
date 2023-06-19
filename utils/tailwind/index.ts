import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { get } from 'lodash'

export function theme(value: string) {
  const resolvedConfig = resolveConfig(tailwindConfig)

  return get(resolvedConfig.theme, value)
}

/**
 * hasTailwindPrefix
 * Check if a class list contains a tailwind set of classes matching a prefix
 * @params prefix {string} A tailwind class prefix like bg, border, text
 * @params overrides {string} A string of css class names that contain overriding class names
 * @return {boolean}
 * @example hasTailWindPrefix('bg', 'bg-transparent border-current text-current')
 */
export function hasTailwindPrefix(prefix: string, overrides: string): boolean {
  const regex = new RegExp(`\\b${prefix}(?:.+)?`)
  return regex.test(overrides)
}
