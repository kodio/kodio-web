import type { Color } from '@/lib/sanity';

const darkColors: Color[] = ['green-900', 'green-800', 'green-700'];

export function isDarkColor(color: Color) {
  return darkColors.includes(color);
}

export const colorMap: Record<Color, string> = {
  white: '#fffdf5',
  'green-900': '#0f1f24',
  'green-800': '#112f3a',
  'green-700': '#1c4757',
  'orange-500': '#c96336',
  'orange-400': '#ef8354',
  'orange-300': '#faa682',
  'orange-200': '#ffc7b0',
  'purple-400': '#b385d4',
  'purple-300': '#d3afe9',
  'purple-200': '#ebccff',
  'purple-100': '#f2deff',
  'yellow-200': '#f7e06a',
  'yellow-100': '#fff0b8',
  'yellow-50': '#fffae8',
};
