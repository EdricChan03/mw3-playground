import type { Config } from 'tailwindcss';

import { materialColors } from './src/lib/m3/theming/catalog/utils/material-color-helpers';

const m3Colors = Object.keys(materialColors).reduce((prev, currKey) => {
  prev[`m3-${currKey}`] = `rgb(var(--md-sys-color-${currKey}--raw) / <alpha-value>)`;
  return prev;
}, {});

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Material 3 colours
        ...m3Colors
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
} satisfies Config;

