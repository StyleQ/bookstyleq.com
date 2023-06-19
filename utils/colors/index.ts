type TOpacityValue = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1
type TOpacity = TOpacityValue | Array<TOpacityValue>
/**
 * translucentBgImage
 * @param image background image url
 * @param color overlay color
 * @param opacity opacity of the overlay in 0-1 range or an array of two numbers
 * @returns {string} CSS background-image property of a linear gradient layered on top of an image
 */
export function translucentBgImage(image : string, color : string, opacity : TOpacity): string {
  const [start, end] = Array.isArray(opacity) ? opacity : [opacity, opacity]

  return `linear-gradient(
    ${translucentColor(color, start)},
    ${translucentColor(color, end)}
  ), url(${image})`.replace(/[\s\n]/g, '')
}

/**
 * 
 * @param color Takes a color in hex format
 * @param opacity The opacity of the color in 0-1 range
 * @returns {string} Color with opacity applied
 */
export function translucentColor(color: string, opacity: TOpacityValue ): string {
  /**
   * TODO:
   * Handle other color formats besides hex
   */

  return `${color}${convertOpacityToHex(opacity)}`
}

/**
 * convertOpacityToHex
 * Takes a number between 0 and 1 and converts it to a hex value
 * @param opacity e.g 0.5
 * @returns {string}
 */
export function convertOpacityToHex(opacity: TOpacityValue): string {
  return Math.round(opacity * 255).toString(16).toUpperCase()
}

/**
 * convertOpacityToNumber 
 * Converts a hex value to a number between 0 and 1
 * @param opacity e.g 'FF'
 * @returns {number}
 */
export function convertOpacityToNumber(opacity: string): number {
  return Number((parseInt(opacity, 16) / 255).toFixed(2))
}
