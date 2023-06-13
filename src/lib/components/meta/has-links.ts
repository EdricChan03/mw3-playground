import type { ComponentItem } from '$lib/data/types';

export const hasLinks = (item: ComponentItem) => {
  if (item.links === undefined) return false;
  if (Array.isArray(item.links)) return item.links.length > 0;
  if ('source' in item.links || 'spec' in item.links) return true;
  return false;
}
