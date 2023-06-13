<script lang="ts">
  import type { ComponentItem } from '$lib/data/types';
  import ComponentMetaLink from './ComponentMetaLink.svelte';
  import { hasLinks } from './has-links';

  export let item: ComponentItem;
</script>

{#if hasLinks(item)}
  <ul class="flex flex-col gap-1 justify-evenly">
    {#if Array.isArray(item.links)}
      {#each item.links as link}
        <ComponentMetaLink {link} />
      {/each}
    {:else if item.links?.spec || item.links?.source}
      {#if item.links.spec}
        <ComponentMetaLink
          link={{
            title: 'Material 3 Guidelines',
            link: item.links.spec,
            icon: 'material_design'
          }}
        />
      {/if}
      {#if item.links.source}
        <ComponentMetaLink
          link={{
            title: 'Source code',
            link: item.links.source,
            icon: 'code'
          }}
        />
      {/if}
    {/if}
  </ul>
{:else}
  <p class="italic text-gray-500">No resources available</p>
{/if}
