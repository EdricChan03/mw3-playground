<script lang="ts">
  import Example from '$lib/components/example/Example.svelte';
  import '@material/web/checkbox/checkbox';
  import type { MdCheckbox } from '@material/web/checkbox/checkbox';
  import '@material/web/switch/switch';

  let disabled = false;

  const onDisabledChange = (ev: Event) => {
    disabled = (ev.target as MdCheckbox).checked;
  }

  let showIcons = false;

  const onShowIconsChange = (ev: Event) => {
    showIcons = (ev.target as MdCheckbox).checked;
  }

  let showOnlySelectedIconValue = false;

  // This attribute is still set even if the value is false, and the "false" value
  // appears to be ignored, so we'll set it to "null" instead such that Svelte removes
  // it as per https://svelte.dev/docs#template-syntax-attributes-and-props.
  $: showOnlySelectedIcon = showOnlySelectedIconValue ? true : null;

  const onShowOnlySelectedIconChange = (ev: Event) => {
    showOnlySelectedIconValue = (ev.target as MdCheckbox).checked;
  }
</script>

<div class="flex flex-col gap-4">
  <div class="flex gap-2 flex-wrap items-center">
    <md-icon aria-hidden="true">toggle_on</md-icon>
    <h2 class="text-2xl font-semibold">Switch</h2>
  </div>
  <div class="flex flex-col gap flex-wrap">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="flex flex-wrap items-center">
      <md-checkbox checked={disabled} on:change={onDisabledChange} />
      Disable switches (<code>disabled</code>)
    </label>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="flex flex-wrap items-center">
      <md-checkbox checked={showIcons} on:change={onShowIconsChange} />
      Show icons (<code>icons</code>)
    </label>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="flex flex-wrap items-center">
      <md-checkbox disabled={!showIcons} checked={showOnlySelectedIconValue} on:change={onShowOnlySelectedIconChange} />
      Show only selected icon (<code>showOnlySelectedIcon</code>)
    </label>
  </div>
  <Example title="Default" id="switch-default">
    <form action="get" class="flex flex-col p-6 gap-2">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="flex flex-wrap items-center justify-between gap-3">
        Wi-Fi
        <md-switch icons={showIcons} {showOnlySelectedIcon} {disabled} name="enableWiFi" />
      </label>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="flex flex-wrap items-center justify-between gap-3">
        Mobile data
        <md-switch icons={showIcons} {showOnlySelectedIcon} {disabled} name="enableData" />
      </label>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="flex flex-wrap items-center justify-between gap-3">
        Bluetooth
        <md-switch icons={showIcons} {showOnlySelectedIcon} {disabled} name="enableBluetooth" />
      </label>
    </form>
  </Example>
</div>
