export const Colors = {
  yellow: "#FFE76E",
  red: "#F54F51",
  blue: "#4D93FC",
  cyan: "#2FBAAF",
  black: "#000000",
  darkBlue: "#00020F",
  dropdown: "#0B1823",
  white: "#ffffff",
} as const;

export class ColorUtils {
  static toRgb(color: string) {
    const aRgbHex = color.slice(1).match(/.{1,2}/g) as RegExpMatchArray;
    return [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ];
  }

  static withOpacity(color: string, opacity: string | number) {
    return `rgba(${[...this.toRgb(color), opacity].join(", ")})`;
  }

  static withOpacityVariable(color: string, variable: string) {
    return this.withOpacity(color, `var(--${variable})`);
  }
}
