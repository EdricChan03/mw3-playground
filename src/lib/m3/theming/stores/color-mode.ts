import { browser } from '$app/environment';
import { writable } from 'svelte/store';

import { changeColorMode, type ColorMode } from '../catalog/utils/theme';

/** The localStorage key to save the seed colour to. */
export const colorModeKey = 'color-mode';

const defaultValue: ColorMode = 'auto';

const validValues = ['light', 'dark', 'auto'];

const isColorMode = (input: string | null): input is ColorMode => input !== null && input in validValues;

const initialValueStr = browser ? window.localStorage.getItem(colorModeKey) ?? defaultValue : defaultValue;

const initialValue: ColorMode = isColorMode(initialValueStr) ? initialValueStr : defaultValue;

const colorMode = writable<ColorMode>(initialValue);

colorMode.subscribe(value => {
  if (browser) {
    changeColorMode(value);
  }
});

export default colorMode;
