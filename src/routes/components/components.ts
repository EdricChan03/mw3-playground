import type { TocHeading } from '$lib/components/toc/types';
import componentsList from '$lib/data/components.json';

export type ComponentExample = TocHeading;

export interface Component {
  label: string;
  slug: string;
  imgSrc?: string;
  desc?: string;
  children?: Component[];
  examples?: ComponentExample[];
}

export const components: Component[] = componentsList;
