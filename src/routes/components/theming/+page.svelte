<script lang="ts">
  import '@material/web/button/filled-button';
  import '@material/web/icon/icon';
  import '@material/web/iconbutton/standard-icon-button';
  import '@material/web/labs/segmentedbuttonset/outlined-segmented-button-set';
  import '@material/web/labs/segmentedbutton/outlined-segmented-button';
  import type { MdOutlinedSegmentedButton } from '@material/web/labs/segmentedbutton/outlined-segmented-button';

  import { materialColors } from '$lib/m3/theming/catalog/utils/material-color-helpers';
  import seedColor from '$lib/m3/theming/stores/seed-color';
  import colorMode from '$lib/m3/theming/stores/color-mode';
  import { getCurrentThemeString, type ColorMode } from '$lib/m3/theming/catalog/utils/theme';

  import { browser } from '$app/environment';

  const onModeChange = (
    ev: CustomEvent<{
      button: MdOutlinedSegmentedButton;
      selected: boolean;
      index: number;
    }>
  ) => {
    const { button } = ev.detail;
    const value = button.dataset.value as ColorMode;
    $colorMode = value;
  };

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => console.log('Successfully copied to clipboard'))
      .catch((err) => {
        alert('Could not copy to clipboard');
        console.error(`Could not copy ${text} to clipboard:`, err);
      });
  };
  const copyCss = () => {
    copyCode(getCurrentThemeString() ?? '');
  };
</script>

<div class="flex flex-col gap-3">
  <h3 class="text-3xl font-semibold">Theme configuration</h3>

  <fieldset class="border rounded flex flex-col gap-2 p-6">
    <section class="flex flex-col gap-1">
      <h4 class="text-2xl">Seed colour</h4>
      <input type="color" bind:value={$seedColor} />
    </section>

    <section class="flex flex-col gap-1">
      <h4 class="text-2xl">Colour mode</h4>
      <md-outlined-segmented-button-set
        on:segmented-button-set-selection={onModeChange}
        class="basis-2"
      >
        <md-outlined-segmented-button
          data-value="dark"
          label="Dark"
          selected={$colorMode === 'dark'}
        >
          <md-icon slot="icon">dark_mode</md-icon>
        </md-outlined-segmented-button>
        <md-outlined-segmented-button
          data-value="auto"
          label="Automatic"
          selected={$colorMode === 'auto'}
        >
          <md-icon slot="icon">brightness_medium</md-icon>
        </md-outlined-segmented-button>
        <md-outlined-segmented-button
          data-value="light"
          label="Light"
          selected={$colorMode === 'light'}
        >
          <md-icon slot="icon">light_mode</md-icon>
        </md-outlined-segmented-button>
      </md-outlined-segmented-button-set>
    </section>
  </fieldset>

  <h3 class="text-3xl font-semibold">Tokens</h3>
  <md-filled-button on:click={copyCss}>
    <md-icon slot="icon">content_copy</md-icon>
    Copy CSS
  </md-filled-button>
  <textarea
    class="font-mono bg-m3-surface-container text-m3-on-surface border-2 rounded-md p-6"
    readonly
  >
    {getCurrentThemeString()
      ?.split(';')
      .filter((item) => !item.includes('raw')) // Exclude Tailwind raw values
      .join(';\n')}
  </textarea>
  <section class="flex flex-col gap-2">
    {#each Object.keys(materialColors) as token}
      {@const color = browser
        ? getComputedStyle(document.body).getPropertyValue(`--md-sys-color-${token}`)
        : null}
      <section class="border-2 rounded-md p-2 transition-all">
        <div class="flex items-center gap-2">
          <h2 class="font-mono text-lg">--md-sys-color-{token}</h2>
          <md-standard-icon-button title="Copy token to clipboard"
            ><md-icon>content_copy</md-icon></md-standard-icon-button
          >
        </div>
        <div class="flex gap-2 place-items-center">
          <div
            style="background-color: var(--md-sys-color-{token})"
            class="w-full h-10 transition-all"
          />
          <span class="font-mono"
            >{color ?? 'Loading...'}</span
          >
          <md-standard-icon-button title="Copy colour to clipboard" on:click={() => copyCode(color ?? '')}
            ><md-icon>content_copy</md-icon></md-standard-icon-button
          >
        </div>
      </section>
    {/each}
  </section>
</div>
