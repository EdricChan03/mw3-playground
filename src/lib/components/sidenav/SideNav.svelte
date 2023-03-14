<script lang="ts">
  import '@material/web/icon/icon';
  import '@material/web/list/list';
  import '@material/web/list/list-item-link';

  import { page } from '$app/stores';
  import type { NavItem } from './types';

  export let items: NavItem[];

  $: {
    console.log($page.url.pathname);
  }
</script>

<!-- <nav class="m-3 flex flex-col {$$props.class}">
  <ul class="flex flex-row sm:flex-col justify-evenly sticky top-3">
    {#each items as item}
      <li class="p-3 rounded focus:ring focus:ring-slate-200 focus:ring-opacity-50 shadow-md transition-all bg-slate-100 hover:bg-slate-200 active:bg-slate-300"><a href={item.href}>{item.label}</a></li>
    {/each}
  </ul>
</nav> -->
<md-list class="h-full">
  {#each items as item}
    <md-list-item-link headline={item.label} href={item.href} active={$page.url.pathname.endsWith(item.href)}>
      <md-icon data-variant="icon" slot="start">widgets</md-icon>
    </md-list-item-link>
  {/each}
</md-list>
