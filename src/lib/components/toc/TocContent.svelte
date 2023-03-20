<script lang="ts">
  import type { TocHeading } from './types';

  export let headings: TocHeading[];
</script>

<ul class="flex flex-col">
  {#each headings as heading}
    <li>
      {#if heading.children}
        <svelte:self {...heading} />
      {:else}
        <a href="#{heading.slug}" class="block rounded transition-all p-2 hover:bg-blue-100 active:bg-blue-200 focus:ring focus:ring-inset focus:ring-blue-700 focus:ring-opacity-50">{heading.title}</a>
      {/if}
    </li>
  {/each}
</ul>
