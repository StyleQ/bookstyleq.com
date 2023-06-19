import { hasTailwindPrefix, theme } from '../index'

describe('tailwind', () => {
  describe('hasTailwindPrefix', () => {
    it('should return false if no prefix is found', () => {
      expect(hasTailwindPrefix('bg', 'text-current border-current')).toBe(false)
    })

    it('should return true if a prefix is found', () => {
      expect(hasTailwindPrefix('bg', 'bg-transparent border-current text-current')).toBe(true)
      expect(hasTailwindPrefix('text', 'bg-transparent text-base')).toBe(true)
    })

    it('supports regex in prefix string', () => {
      expect(hasTailwindPrefix('text-\d?(base|sm|xl|xs|lg)', 'font-semibold text-base')).toBe(true)
      expect(hasTailwindPrefix('text-\d?(base|sm|xl|xs|lg)', 'font-semibold text-white')).toBe(false)
    })
  })

  describe('theme', () => {
    it('should return a value from the tailwind theme', () => {
      expect(theme('colors.white')).toBe('#FFFFFF')
      expect(theme('colors.gray.100')).toBe('#F7F7F7')
    })
  })
})
