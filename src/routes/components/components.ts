import type { TocHeading } from '$lib/components/toc/types';

export type ComponentExample = TocHeading;

export interface Component {
  label: string;
  href: string;
  imgSrc?: string;
  desc?: string;
  examples?: ComponentExample[];
}

export const components: Component[] = [
  {
    label: 'Button',
    href: 'button',
    imgSrc: 'https://material.angular.io/assets/screenshots/button.scene.png',
    desc: 'An interactive button with a range of presentation options.',
    examples: [
      { title: 'Default', slug: 'button-default' },
      { title: 'With icons', slug: 'button-icons' },
      { title: 'Theming', slug: 'button-theming' },
    ]
  },
  {
    label: 'Checkbox',
    href: 'checkbox',
    imgSrc: 'https://material.angular.io/assets/screenshots/checkbox.scene.png',
    desc: 'Captures boolean input with an optional indeterminate mode.'
  },
  {
    label: 'Divider',
    href: 'divider',
    imgSrc: 'https://material.angular.io/assets/screenshots/divider.scene.png',
    desc: 'A vertical or horizontal visual divider.'
  }
];
