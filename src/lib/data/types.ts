export interface ComponentLink {
  title: string;
  link: string;
  icon?: string;
}

export interface ComponentItem {
  label: string;
  slug: string;
  icon?: string;
  imgSrc?: string;
  desc?: string;
  links?: {
    spec?: string;
    source?: string;
  } | ComponentLink[];
  examples?: ComponentExampleItem[];
  children?: Omit<ComponentItem, 'children'>[];
}

export interface ComponentExampleItem {
  title: string;
  slug: string;
}
