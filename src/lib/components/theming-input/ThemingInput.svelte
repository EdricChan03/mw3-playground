<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ThemingInputEvents } from './types';

  export let isColor: boolean = true;
  export let value: string;

  const dispatch = createEventDispatcher<ThemingInputEvents>();

  const onResetClick = () => dispatch('resetStyle');
  const onClearClick = () => dispatch('clearStyle');
</script>

<span class="inline-flex items-center gap-0.5">
  {#if isColor}
    <span style:background-color={value} class="inline-block w-4 h-4 rounded-full border-2" />
  {/if}
  <input type="text" bind:value class="h-fit w-20 border border-slate-500 rounded" />
  <md-filled-tonal-icon-button title="Reset to default" on:click={onResetClick}>
    <md-icon>undo</md-icon>
  </md-filled-tonal-icon-button>
  <md-filled-tonal-icon-button title="Clear" on:click={onClearClick}>
    <md-icon>delete</md-icon>
  </md-filled-tonal-icon-button>
</span>
