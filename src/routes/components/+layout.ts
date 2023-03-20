import type { LayoutLoad } from './$types';
import { components } from './components';

export const load = (async () => {
  return {
    components
  };
}) satisfies LayoutLoad;

export const prerender = true;
