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
        <a href="#{heading.slug}" class="block rounded transition-all p-2  hover:bg-m3-secondary-container hover:text-m3-on-secondary-container">{heading.title}</a>
      {/if}
    </li>
  {/each}
</ul>
