import type { Color } from 'types/sanity';

const darkColors = ['green-900', 'green-800', 'green-700'];

export function isDarkColor(color: Color) {
  return darkColors.includes(color);
}
