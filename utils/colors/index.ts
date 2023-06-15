export function translucentBgImage(image : string, color : string, opacity : number) {
    return `linear-gradient(
    ${translucentColor(color, opacity)},
    ${color}
  ), url(${image})`
}

export function translucentColor(color: string, opacity: number ): string {
  /**
   * TODO:
   * Handle other color formats besides hex
   */

  return `${color}${convertOpacityToHex(opacity)}`
}

/**
 * convertOpacityToHex
 * @param opacity 
 * Takes a number between 0 and 1 and converts it to a hex value
 * @returns string
 */
export function convertOpacityToHex(opacity: number): string {
  return Math.round(opacity * 255).toString(16)
}

export function convertOpacityToNumber(opacity: string): number {
  return Number((parseInt(opacity, 16) / 255).toFixed(2))
}
