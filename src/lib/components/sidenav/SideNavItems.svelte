<script lang="ts">
  import SideNavItem from './SideNavItem.svelte';
  import type { NavItem } from './types';

  export let items: NavItem[];

  export let level = 0;

  export let baseSlug = '';
</script>

<ul class="flex flex-col gap-1 justify-evenly" style:margin-left="{level * 10}px">
  {#each items as item}
    <SideNavItem {item} componentPath={baseSlug + item.slug} />
    {#if item.children}
      <svelte:self items={item.children} level={level + 1} baseSlug="{item.slug}/" />
    {/if}
  {/each}
</ul>
