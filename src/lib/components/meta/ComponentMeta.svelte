<script lang="ts">
  import type { ComponentItem } from '$lib/data/types';
  import ComponentMetaLinks from './ComponentMetaLinks.svelte';

  export let item: ComponentItem;
</script>

<div class="flex flex-col gap-3 mb-3">
  <h1 class="font-semibold text-3xl flex gap-2 items-center">
    <md-icon aria-hidden="true">{item.icon ?? 'widgets'}</md-icon>{item.label}
  </h1>
  {#if item.desc}
    <p>{item.desc}</p>
  {/if}
  <section class="flex flex-col gap-3">
    <h2 class="font-semibold text-2xl border-b-2">Resources</h2>
    <ComponentMetaLinks {item} />
  </section>
  <h2 class="font-semibold text-2xl border-b-2">Demos</h2>
</div>
