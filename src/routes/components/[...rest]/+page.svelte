<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex flex-col items-center justify-center">
  <div class="flex flex-col items-center justify-center gap-3 border-2 border-red-500 rounded p-3">
    <div class="flex flex-col items-center justify-center">
      <md-icon aria-hidden="true">error</md-icon>
      <h3 class="text-2xl font-semibold">Not found</h3>
    </div>

    <p class="text-lg">No such playground with ID <code>{data.slug}</code> exists.</p>
  </div>
</div>

<style>
  md-icon {
    --md-icon-size: 36px;
  }
</style>
