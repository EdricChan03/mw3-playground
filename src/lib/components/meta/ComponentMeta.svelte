<script lang="ts">
  import type { ComponentItem } from '$lib/data/types';

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
    {#if item.links?.spec || item.links?.source}
      <ul class="flex flex-col gap-1 justify-evenly">
        {#if item.links.spec}
          <li class="basis-1/3">
            <a
              href={item.links.spec}
              class="flex items-center gap-2 p-3 rounded focus:ring focus:ring-inset focus:ring-opacity-50 transition-all focus:ring-purple-700 bg-purple-100 hover:bg-purple-200 active:bg-purple-300"
            >
              <!-- <img src="https://material-components.github.io/material-components-web-catalog/static/media/ic_material_design_24px.svg" alt="Guidelines icon" aria-hidden="true"> -->
              <md-icon class="google-symbols" aria-hidden="true">material_design</md-icon>
              Material 3 Guidelines
              <span class="grow" />
              <md-icon aria-hidden="true">open_in_new</md-icon>
            </a>
          </li>
        {/if}
        {#if item.links.source}
          <li class="basis-1/3">
            <a
              href={item.links.source}
              class="flex items-center gap-2 p-3 rounded focus:ring focus:ring-inset focus:ring-opacity-50 transition-all focus:ring-purple-700 bg-purple-100 hover:bg-purple-200 active:bg-purple-300"
            >
              <md-icon aria-hidden="true">code</md-icon>
              Source code
              <span class="grow" />
              <md-icon aria-hidden="true">open_in_new</md-icon>
            </a>
          </li>
        {/if}
      </ul>
    {:else}
      <p class="italic text-gray-500">No resources available</p>
    {/if}
  </section>
  <h2 class="font-semibold text-2xl border-b-2">Demos</h2>
</div>
