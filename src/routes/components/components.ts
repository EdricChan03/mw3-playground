import type { TocHeading } from '$lib/components/toc/types';

export type ComponentExample = TocHeading;

export interface Component {
  label: string;
  slug: string;
  imgSrc?: string;
  desc?: string;
  children?: Component[];
  examples?: ComponentExample[];
}

export const components: Component[] = [
  {
    label: 'Badge',
    slug: 'badge',
    imgSrc: 'https://material.angular.io/assets/screenshots/badge.scene.png',
    desc: 'A small value indicator that can be overlaid on another object.'
  },
  {
    label: 'Button',
    slug: 'button',
    imgSrc: 'https://material.angular.io/assets/screenshots/button.scene.png',
    desc: 'An interactive button with a range of presentation options.',
    examples: [
      { title: 'Default', slug: 'button-default' },
      { title: 'With icons', slug: 'button-icons' },
      { title: 'Theming', slug: 'button-theming' },
    ],
    children: [
      { label: 'Floating action button', slug: 'fab' },
      { label: 'Segmented button', slug: 'segmented-button' },
    ]
  },
  {
    label: 'Checkbox',
    slug: 'checkbox',
    imgSrc: 'https://material.angular.io/assets/screenshots/checkbox.scene.png',
    desc: 'Captures boolean input with an optional indeterminate mode.'
  },
  {
    label: 'Chips',
    slug: 'chips',
    imgSrc: 'https://material.angular.io/assets/screenshots/chips.scene.png',
    desc: 'Presents a list of items as a set of small, tactile entities.'
  },
  {
    label: 'Dialog',
    slug: 'dialog',
    imgSrc: 'https://material.angular.io/assets/screenshots/dialog.scene.png',
    desc: 'A configurable modal that displays dynamic content.'
  },
  {
    label: 'Divider',
    slug: 'divider',
    imgSrc: 'https://material.angular.io/assets/screenshots/divider.scene.png',
    desc: 'A vertical or horizontal visual divider.'
  },
  {
    label: 'Icon',
    slug: 'icon',
    imgSrc: 'https://material.angular.io/assets/screenshots/icon.scene.png',
    desc: 'Renders a specified icon.'
  },
  {
    label: 'List',
    slug: 'list',
    imgSrc: 'https://material.angular.io/assets/screenshots/list.scene.png',
    desc: 'Presents conventional lists of items.'
  },
  {
    label: 'Menu',
    slug: 'menu',
    imgSrc: 'https://material.angular.io/assets/screenshots/menu.scene.png',
    desc: 'A floating panel of nestable options.'
  },
  {
    label: 'Navigation bar',
    slug: 'nav-bar'
  },
  {
    label: 'Navigation drawer',
    slug: 'nav-drawer'
  },
  {
    label: 'Navigation tab',
    slug: 'nav-tab'
  },
  {
    label: 'Radio',
    slug: 'radio',
    imgSrc: 'https://material.angular.io/assets/screenshots/radio.scene.png',
    desc: 'Allows the user to select one option from a group.'
  },
  {
    label: 'Slider',
    slug: 'slider',
    imgSrc: 'https://material.angular.io/assets/screenshots/slider.scene.png',
    desc: 'Allows the user to input a value by dragging along a slider.'
  },
  {
    label: 'Switch',
    slug: 'switch',
    imgSrc: 'https://material.angular.io/assets/screenshots/slide-toggle.scene.png',
    desc: 'Captures boolean values as a clickable and draggable switch.'
  },
  {
    label: 'Text field',
    slug: 'text-field',
    imgSrc: 'https://material.angular.io/assets/screenshots/form-field.scene.png',
    desc: 'Wraps input fields so they are displayed consistently.'
  }
];
