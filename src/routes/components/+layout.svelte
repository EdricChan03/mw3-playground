<script lang="ts">
  import SideNav from '$lib/components/sidenav/SideNav.svelte';
  import Header from '$lib/components/header/Header.svelte';
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';
  import Toc from '$lib/components/toc/Toc.svelte';
  import ComponentMeta from '$lib/components/meta/ComponentMeta.svelte';
  import Seo from './ComponentSeo.svelte';

  import { onMount } from 'svelte';
  import { init } from '$lib/m3/theming/catalog/pages/global';
  import { applySavedTheme } from '$lib/m3/theming/catalog/inline/apply-saved-theme';
  onMount(() => {
    init();
    applySavedTheme();
    console.log('M3 themes have been successfully initialised');
  });


  export let data: LayoutData;

  // Merge all components together
  const components = data.components.flatMap(item => {
    const { children, ...rest } = item;
    return children?.concat(rest) ?? item;
  });
  $: currentComponent = components.find((cmp) => $page.url.pathname.endsWith(cmp.slug));
  $: hasExample = currentComponent?.examples !== undefined;
</script>

<!-- Meta tags -->
<svelte:head>
  {#if currentComponent}
    <Seo component={currentComponent} />
  {/if}
</svelte:head>

<main class="bg-m3-surface text-m3-on-surface m3-scrollbar">
  <Header />
  <div class="flex flex-col sm:flex-row gap-2 mt-16 sm:overflow-hidden h-full">
    <SideNav items={data.components.filter(c => !c.excludeNav)} class="sm:fixed sm:inset-0 sm:top-[84px]" />

    <main class="sm:w-full m-6 sm:pl-[300px] {hasExample ? 'sm:pr-[170px]' : ''} overflow-auto">
      {#if currentComponent}
        <ComponentMeta item={currentComponent} />
      {/if}
      <slot />
    </main>
    {#if currentComponent?.examples}
      <Toc headings={currentComponent?.examples} class="hidden sm:block m-6 fixed right-0 top-[72px]" />
    {/if}
  </div>
</main>
