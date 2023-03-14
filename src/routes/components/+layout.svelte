<script lang="ts">
  import type { LayoutData } from './$types';
  import SideNav from '$lib/components/sidenav/SideNav.svelte';

  export let data: LayoutData;
</script>

<div class="flex gap-2">
  <SideNav items={data.components} />

  <main class="m-4">
    <slot />
  </main>
</div>
