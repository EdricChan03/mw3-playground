import type { LayoutLoad } from './$types';

export const load = (async () => {
  return {
    components: [
      { label: 'Button', href: 'button' },
      { label: 'Checkbox', href: 'checkbox' },
      { label: 'Divider', href: 'divider' },
    ]
  };
}) satisfies LayoutLoad;

export const prerender = true;
