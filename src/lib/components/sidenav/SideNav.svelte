<script lang="ts">
  import '@material/web/icon/icon';

  import { base } from '$app/paths';

  import type { NavItem } from './types';
  import SideNavItems from './SideNavItems.svelte';
  import SideNavItem from './SideNavItem.svelte';

  export let items: NavItem[];

  export const themingItem: NavItem = {
    label: 'Theming',
    slug: 'theming',
    icon: 'palette'
  };
</script>

<nav class="flex flex-col gap-1 p-6 sm:w-[300px] sm:border-r {$$props.class}">
  <div class="flex flex-col gap-1 overflow-auto">
    <SideNavItem item={themingItem} />
    <h3 class="font-semibold text-sm sticky top-0">
      <a
        href="{base}/components"
        class="block p-2 rounded focus:ring focus:ring-inset focus:ring-m3-secondary focus:ring-opacity-50 transition-all bg-m3-secondary-container text-m3-on-secondary-container"
        >Components</a
      >
    </h3>
    <SideNavItems {items} />
  </div>
</nav>
