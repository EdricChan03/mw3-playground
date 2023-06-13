import { browser } from '$app/environment';
import { writable } from 'svelte/store';

import { changeColor } from '../catalog/utils/theme';

/** The localStorage key to save the seed colour to. */
export const seedColorKey = 'seed-color';

const defaultValue = '#4452FF';
const initialValue = browser ? window.localStorage.getItem(seedColorKey) ?? defaultValue : defaultValue;

const seedColor = writable<string>(initialValue);

seedColor.subscribe(value => {
  if (browser) {
    changeColor(value);
  }
});

export default seedColor;
