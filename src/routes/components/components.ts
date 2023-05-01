import type { TocHeading } from '$lib/components/toc/types';
import componentsList from '$lib/data/components.json';

export type ComponentExample = TocHeading;

import type { ComponentItem } from '$lib/data/types';

/** @deprecated */
export type Component = ComponentItem;

export const components: Component[] = componentsList;
