<script lang="ts">
  import CodeDisclosure from '$lib/components/example/CodeDisclosure.svelte';
  import Swatch from '$lib/components/swatch/Swatch.svelte';

  export let disabled: boolean = false;
</script>

<div class="flex gap-3 flex-wrap p-6">
  <md-elevated-button {disabled}>Elevated</md-elevated-button>
  <md-filled-button {disabled}>Filled</md-filled-button>
  <md-outlined-button {disabled}>Outlined</md-outlined-button>
  <md-text-button {disabled}>Text</md-text-button>
  <md-tonal-button {disabled}>Tonal</md-tonal-button>
</div>

<div class="flex flex-col gap-3 px-6 pb-6">
  <p>Properties used:</p>
  <CodeDisclosure title="Elevated styles">/* Elevated styles */
--md-elevated-button-container-shape: 0px;
--md-elevated-button-label-text-type: 500 0.875rem/1.25rem system-ui;</CodeDisclosure>

  <CodeDisclosure title="Filled styles">/* Filled styles */
--md-filled-button-container-shape: 0px;
--md-filled-button-label-text-type: 500 0.875rem/1.25rem system-ui;</CodeDisclosure>

  <CodeDisclosure title="Outlined styles">/* Outlined styles */
--md-outlined-button-container-shape: 0px;
--md-outlined-button-label-text-type: 500 0.875rem/1.25rem system-ui;</CodeDisclosure>

  <CodeDisclosure title="Text styles">/* Text styles */
--md-text-button-container-shape: 0px;
--md-text-button-label-text-type: 500 0.875rem/1.25rem system-ui;</CodeDisclosure>

  <CodeDisclosure title="Tonal styles">/* Tonal styles */
--md-tonal-button-container-shape: 0px;
--md-tonal-button-label-text-type: 500 0.875rem/1.25rem system-ui;</CodeDisclosure>

  <CodeDisclosure title="Theming">/* Theming */
--md-sys-color-secondary-container: <Swatch color="#CCE8E7" />;
--md-sys-color-on-secondary-container: <Swatch color="#051F1F" />;
--md-sys-color-primary: <Swatch color="#006A6A" />;
--md-sys-color-on-primary: <Swatch color="#FFFFFF" />;
--md-sys-color-surface: <Swatch color="#FAFDFC" />;
--md-sys-color-on-surface: <Swatch color="#191C1C" />;
--md-sys-color-outline: <Swatch color="#6F7979" />;</CodeDisclosure>
</div>

<style>
  div {
    --md-elevated-button-container-shape: 0px;
    --md-elevated-button-label-text-type: 500 0.875rem/1.25rem system-ui;
    --md-filled-button-container-shape: 0px;
    --md-filled-button-label-text-type: 500 0.875rem/1.25rem system-ui;
    --md-outlined-button-container-shape: 0px;
    --md-outlined-button-label-text-type: 500 0.875rem/1.25rem system-ui;
    --md-text-button-container-shape: 0px;
    --md-text-button-label-text-type: 500 0.875rem/1.25rem system-ui;
    --md-tonal-button-container-shape: 0px;
    --md-tonal-button-label-text-type: 500 0.875rem/1.25rem system-ui;
    --md-sys-color-secondary-container: #CCE8E7;
    --md-sys-color-on-secondary-container: #051F1F;
    --md-sys-color-primary: #006A6A;
    --md-sys-color-on-primary: #FFFFFF;
    --md-sys-color-surface: #FAFDFC;
    --md-sys-color-on-surface: #191C1C;
    --md-sys-color-outline: #6F7979;
  }
</style>
