<script lang="ts">
  import { base } from '$app/paths';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h2 class="font-semibold text-2xl mx-4 mb-4 sm:mt-4">Components</h2>
<section class="grid grid-cols-2 sm:grid-cols-3 gap-4 m-4">
  {#each data.components as cmp}
    <a
      href="{base}/components/{cmp.slug}"
      class="hover:bg-slate-100 active:bg-slate-200 transition-all basis-1/3 rounded"
    >
      <article class="flex flex-col border rounded h-full overflow-hidden">
        {#if cmp.imgSrc}
          <img src={cmp.imgSrc} alt="{cmp.label} preview" />
        {:else}
          <div class="flex items-center justify-center px-10 py-6">
            <md-icon>widgets</md-icon>
          </div>
        {/if}
        <div class="m-3 flex flex-col gap-2">
          <h3 class="font-semibold text-xl">{cmp.label}</h3>
          {#if cmp.desc}
            <p class="font-light">{cmp.desc}</p>
          {/if}
        </div>
      </article>
    </a>
  {/each}
</section>

<style>
  md-icon {
    --md-icon-size: 48px;
  }
</style>
