<script lang="ts">
  import '@material/web/icon/icon';

  import { base } from '$app/paths';

  import type { NavItem } from './types';
  import SideNavItems from './SideNavItems.svelte';

  export let items: NavItem[];

  const defaultClasses = 'focus:ring-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300';
  const activeClasses = 'focus:ring-blue-700 bg-blue-100 hover:bg-blue-200 active:bg-blue-300';

  const getClasses = (url: URL, href: string) =>
    isActive(url, href) ? activeClasses : defaultClasses;
  const isActive = (url: URL, href: string) => url.pathname.endsWith(href);
</script>

<nav class="flex flex-col gap-1 p-6 sm:w-[300px] sm:border-r {$$props.class}">
  <div class="flex flex-col gap-1 overflow-auto">
    <h3 class="font-semibold text-sm sticky top-0">
      <a
        href="{base}/components"
        class="block p-2 rounded focus:ring focus:ring-inset focus:ring-slate-100 focus:ring-opacity-50 transition-all bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white"
        >Components</a
      >
    </h3>
    <SideNavItems {items} />
  </div>
</nav>
