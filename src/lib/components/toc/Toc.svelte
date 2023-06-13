<script lang="ts">
  import { onMount } from 'svelte';
  import TocContent from './TocContent.svelte';
  import type { TocHeading } from './types';

  export let headings: TocHeading[];
</script>

<!-- <svelte:window on:load={onLoad} /> -->

<aside class="border-l-4 border-m3-secondary pl-2 {$$props.class}">
  <h2 class="font-semibold">Table of Contents</h2>
  <TocContent {headings} />
</aside>
