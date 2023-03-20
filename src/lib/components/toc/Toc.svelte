<script lang="ts">
  import { onMount } from 'svelte';
  import TocContent from './TocContent.svelte';
  import type { TocHeading } from './types';

  export let headings: TocHeading[];

  const onLoad = () => {
    console.log('svelte:window load');
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        console.log(`aside li a[href="#${id}"]`);
        if (entry.intersectionRatio > 0) {
          document.querySelector(`aside li a[href="#${id}"]`)!.parentElement!.classList.add('bg-blue-400', 'text-white');
        } else {
          document
            .querySelector(`aside li a[href="#${id}"]`)!
            .parentElement!.classList.remove('bg-blue-400', 'text-white');
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section + div[id]').forEach((section) => {
      observer.observe(section);
    });
  };
  onMount(() => {
    onLoad();
  })
</script>

<!-- <svelte:window on:load={onLoad} /> -->

<aside class="border-l-4 border-purple-400 pl-2 {$$props.class}">
  <h2 class="font-semibold">Table of Contents</h2>
  <TocContent {headings} />
</aside>
