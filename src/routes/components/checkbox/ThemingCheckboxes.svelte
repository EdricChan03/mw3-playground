<script lang="ts">
  import '@material/web/iconbutton/filled-tonal-icon-button';

  import CodeDisclosure from '$lib/components/example/CodeDisclosure.svelte';
  import Example from '$lib/components/example/Example.svelte';
  import ThemingInput from '$lib/components/theming-input/ThemingInput.svelte';

  export let disabled: boolean = false;

  const styles = {
    colorPrimary: '#006A6A',
    colorOnPrimary: '#FFFFFF',
    colorOnSurfaceVariant: '#3F4948',
    checkboxContainerShape: '0px'
  };

  const defaultStyles = { ...styles };

  const onSwatchChange = (ev: Event, type: keyof typeof styles) => {
    updateStyle(type, (ev.target as HTMLInputElement).value)
  }

  const updateStyle = (type: keyof typeof styles, value: string) => {
    styles[type] = value;
  }

  const resetStyle = (type: keyof typeof styles) => {
    updateStyle(type, defaultStyles[type]);
  }

  const clearStyle = (type: keyof typeof styles) => {
    updateStyle(type, '');
  }
</script>

<Example title="Theming" id="checkbox-theming">
  <div class="flex gap-3 flex-wrap p-6"
    style="
    --md-checkbox-container-shape: {styles.checkboxContainerShape};
    --md-sys-color-primary: {styles.colorPrimary};
    --md-sys-color-on-primary: {styles.colorOnPrimary};
    --md-sys-color-on-surface-variant: {styles.colorOnSurfaceVariant};
    ">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="flex flex-wrap items-center">
      <md-checkbox {disabled} />
      Unchecked
    </label>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="flex flex-wrap items-center">
      <md-checkbox indeterminate {disabled} />
      Indeterminate
    </label>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="flex flex-wrap items-center">
      <md-checkbox checked {disabled} />
      Checked
    </label>
  </div>

  <div class="flex flex-col gap-3 px-6 pb-6">
    <p>Properties used:</p>
    <CodeDisclosure title="Checkbox styles">/* Checkbox styles */
--md-checkbox-container-shape: <ThemingInput
  bind:value={styles.checkboxContainerShape}
  isColor={false}
  on:resetStyle={() => resetStyle('checkboxContainerShape')}
  on:clearStyle={() => clearStyle('checkboxContainerShape')} />;</CodeDisclosure>

    <CodeDisclosure title="Theming">/* Theming */
--md-sys-color-primary: <ThemingInput
  bind:value={styles.colorPrimary}
  on:resetStyle={() => resetStyle('colorPrimary')}
  on:clearStyle={() => clearStyle('colorPrimary')} />;
--md-sys-color-on-primary: <ThemingInput
  bind:value={styles.colorOnPrimary}
  on:resetStyle={() => resetStyle('colorOnPrimary')}
  on:clearStyle={() => clearStyle('colorOnPrimary')} />;
--md-sys-color-on-surface-variant: <ThemingInput
  bind:value={styles.colorOnSurfaceVariant}
  on:resetStyle={() => resetStyle('colorOnSurfaceVariant')}
  on:clearStyle={() => clearStyle('colorOnSurfaceVariant')} />;</CodeDisclosure>
  </div>
</Example>
