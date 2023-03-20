<script lang="ts">
  import type { TocHeading } from './types';

  export let headings: TocHeading[];
</script>

<ul>
  {#each headings as heading}
    <li class="rounded transition-all p-2">
      {#if heading.children}
        <svelte:self {...heading} />
      {:else}
        <a href="#{heading.slug}">{heading.title}</a>
      {/if}
    </li>
  {/each}
</ul>
