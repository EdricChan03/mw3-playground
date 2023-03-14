<script lang="ts">
  import Example from '$lib/components/example/Example.svelte';
  import '@material/web/button/elevated-button';
  import '@material/web/button/filled-button';
  import '@material/web/button/outlined-button';
  import '@material/web/button/text-button';
  import '@material/web/button/tonal-button';
  import '@material/web/checkbox/checkbox';
  import type { MdCheckbox } from '@material/web/checkbox/checkbox';
  import '@material/web/fab/fab';
  import '@material/web/fab/fab-extended';
  import '@material/web/icon/icon';
  import type { PageData } from './$types';
  import ThemingBtns from './ThemingBtns.svelte';

  export let data: PageData;

  let disabled = false;

  const onDisabledChange = (ev: Event) => {
    disabled = (ev.target as MdCheckbox).checked;
  }
</script>

<div class="flex flex-col gap-4">
  <div class="flex gap-2 items-center">
    <md-icon aria-hidden="true">widgets</md-icon>
    <h2 class="text-2xl font-semibold">Button</h2>
  </div>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="flex items-center">
    <md-checkbox checked={disabled} on:change={onDisabledChange} />
    Disable buttons
  </label>
  <Example title="Default">
    <div class="flex items-center gap-3 p-6">
      <md-elevated-button label="Elevated" {disabled} />
      <md-filled-button label="Filled" {disabled} />
      <md-outlined-button label="Outlined" {disabled} />
      <md-text-button label="Text" {disabled} />
      <md-tonal-button label="Tonal" {disabled} />
      <md-fab icon="add" {disabled} />
      <md-fab-extended label="Add" icon="add" {disabled} />
    </div>
  </Example>

  <Example title="With icons">
    <div class="flex gap-3 p-6">
      <md-tonal-button label="Send" {disabled}>
        <svg slot="icon" viewBox="0 0 48 48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"/></svg>
      </md-tonal-button>

      <md-text-button label="Open" trailingicon {disabled}>
        <svg slot="icon" viewBox="0 0 48 48"><path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z"/></svg>
      </md-text-button>
    </div>
  </Example>

  <ThemingBtns {disabled} />
</div>
