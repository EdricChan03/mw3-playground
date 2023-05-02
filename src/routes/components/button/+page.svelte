<script lang="ts">
  import '@material/web/button/elevated-button';
  import '@material/web/button/filled-button';
  import '@material/web/button/outlined-button';
  import '@material/web/button/text-button';
  import '@material/web/button/tonal-button';
  import '@material/web/checkbox/checkbox';
  import '@material/web/fab/branded-fab';
  import '@material/web/fab/fab';
  import '@material/web/icon/icon';

  import type { MdCheckbox } from '@material/web/checkbox/checkbox';

  import Example from '$lib/components/example/Example.svelte';

  import DefaultButton from '$examples/button/default/DefaultButton.svelte';
  import ButtonWithIcons from '$examples/button/icons/ButtonWithIcons.svelte';
  import ButtonTheming from '$examples/button/theming/ButtonTheming.svelte';

  let disabled = false;

  const onDisabledChange = (ev: Event) => {
    disabled = (ev.target as MdCheckbox).checked;
  }
</script>

<div class="flex flex-col gap-4">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="flex flex-wrap items-center">
    <md-checkbox checked={disabled} on:change={onDisabledChange} />
    Disable buttons
  </label>
  <Example title="Default" id="button-default">
    <DefaultButton {disabled} />
  </Example>

  <Example title="With icons" id="button-icons">
    <ButtonWithIcons {disabled} />
  </Example>

  <Example title="Theming" id="button-theming">
    <ButtonTheming {disabled} />
  </Example>
</div>
