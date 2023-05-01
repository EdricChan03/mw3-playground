<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  import type { NavItem } from './types';

  export let item: NavItem;

  export let componentPath = item.slug;

  export let defaultClass = 'focus:ring-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300';
  export let activeClass = 'focus:ring-blue-700 bg-blue-100 hover:bg-blue-200 active:bg-blue-300';

  const getClasses = (url: URL, href: string) =>
    isActive(url, href) ? activeClass : defaultClass;
  const isActive = (url: URL, href: string) => url.pathname.endsWith(href);
</script>
<li
  class="basis-1/3 border-l-4 {isActive($page.url, item.slug) ? 'border-blue-500' : ''} pl-1"
  aria-current="false"
>
  <a
    href="{base}/components/{componentPath}"
    class="flex items-center gap-2 p-3 rounded focus:ring focus:ring-inset focus:ring-opacity-50 transition-all {getClasses(
      $page.url,
      item.slug
    )}"
    ><div class="w-6 h-6 flex justify-center items-center">
      <span class="material-symbols-outlined">{item.icon ?? 'widgets'}</span>
    </div>
    <span>{item.label}</span></a
  >
</li>
