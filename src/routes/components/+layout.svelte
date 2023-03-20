<script lang="ts">
  import SideNav from '$lib/components/sidenav/SideNav.svelte';
  import Header from '$lib/components/header/Header.svelte';
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
  import Toc from '$lib/components/toc/Toc.svelte';

  export let data: LayoutData;

  $: currentComponent = data.components.find((cmp) => $page.url.pathname.endsWith(cmp.href));
  $: hasExample = currentComponent?.examples !== undefined;
</script>

<Header />
<div class="flex flex-col sm:flex-row gap-2 mt-[72px] sm:overflow-hidden h-full">
  <SideNav items={data.components} class="sm:fixed sm:inset-0 sm:top-[84px]" />

  <main class="sm:w-full m-6 sm:pl-[300px] {hasExample ? 'sm:pr-[170px]' : ''} overflow-auto">
    <slot />
  </main>
  {#if currentComponent?.examples}
    <Toc headings={currentComponent?.examples} class="hidden sm:block m-6 fixed right-0 top-[72px]" />
  {/if}
</div>
