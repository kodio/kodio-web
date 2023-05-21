import type { Color } from '@/lib/sanity';

const darkColors: Color[] = ['green-900', 'green-800', 'green-700'];

export function isDarkColor(color: Color) {
  return darkColors.includes(color);
}
