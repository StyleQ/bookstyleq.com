import {
  convertOpacityToHex,
  convertOpacityToNumber,
  translucentColor,
  translucentBgImage
} from '../'

describe('colors', () => {
  describe('convertOpacityToHex', () => {
    it('should convert a number between 0 and 1 to a hex value', () => {
      expect(convertOpacityToHex(0.5)).toBe('80')
      expect(convertOpacityToHex(0.1)).toBe('1A')
      expect(convertOpacityToHex(1)).toBe('FF')
    })
  })

  describe('convertOpacityToNumber', () => {
    it('should convert a hex value to a number between 0 and 1', () => {
      expect(convertOpacityToNumber('80')).toBe(0.5)
      expect(convertOpacityToNumber('1A')).toBe(0.1)
      expect(convertOpacityToNumber('FF')).toBe(1)
    })
  })

  describe('translucentColor', () => {
    it('should return a color with opacity applied', () => {
      expect(translucentColor('#FFFFFF', 0.5)).toBe('#FFFFFF80')
      expect(translucentColor('#FFFFFF', 0.1)).toBe('#FFFFFF1A')
      expect(translucentColor('#FFFFFF', 1)).toBe('#FFFFFFFF')
    })
  })

  describe('translucentBgImage', () => {
    it('should return a background image with a translucent overlay', () => {
      expect(translucentBgImage(
        'https://images.unsplash.com/photo-1558980664-4f7d7e42f9c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        '#000000',
        0.5
      )).toBe(
        'linear-gradient(#00000080,#00000080),url(https://images.unsplash.com/photo-1558980664-4f7d7e42f9c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)'
        )
    })
  })
})
