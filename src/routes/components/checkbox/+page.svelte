<script lang="ts">
  import Example from '$lib/components/example/Example.svelte';
  import '@material/web/checkbox/checkbox';
  import type { MdCheckbox } from '@material/web/checkbox/checkbox';
  import '@material/web/radio/radio';
  import type { MdRadio } from '@material/web/radio/radio';

  import type { PageData } from './$types';
  import ThemingCheckboxes from './ThemingCheckboxes.svelte';
  import type { CheckboxState } from './types';

  export let data: PageData;

  let state: CheckboxState = 'unchecked';
  const onStateChange = (ev: Event) => {
    state = (ev.target as MdRadio).value as CheckboxState;
  };

  let disabled = false;
  const onDisabledChange = (ev: Event) => {
    disabled = (ev.target as MdCheckbox).checked;
  };
</script>

<div class="flex flex-col gap-4">
  <div class="flex gap-2 flex-wrap items-center">
    <md-icon aria-hidden="true">check_box</md-icon>
    <h2 class="text-2xl font-semibold">Checkbox</h2>
  </div>
  <Example title="Default" id="checkbox-default">
    <div class="flex flex-col p-3">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="flex flex-wrap items-center">
        <md-checkbox checked />
        Agree to the terms and conditions
      </label>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="flex flex-wrap items-center">
        <md-checkbox checked disabled />
        Sign me up to the newsletter
      </label>
    </div>
  </Example>
  <Example title="States" id="checkbox-state">
    <div class="flex flex-col gap-3 p-3">
      <div class="flex flex-col gap-2 p-6 border-2 rounded">
        <h3 class="font-semibold text-xl">Config</h3>
        <fieldset class="border-2 p-3">
          <legend class="text-lg">State</legend>
          <div class="flex flex-col gap-1">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="flex flex-wrap items-center">
              <md-radio name="state" value="unchecked" on:change={onStateChange} />
              Unchecked
            </label>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="flex flex-wrap items-center">
              <md-radio name="state" value="indeterminate" on:change={onStateChange} />
              Indeterminate
            </label>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="flex flex-wrap items-center">
              <md-radio name="state" value="checked" on:change={onStateChange} />
              Checked
            </label>
          </div>
        </fieldset>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="flex flex-wrap items-center">
          <md-checkbox checked={disabled} on:change={onDisabledChange} />
          Disable checkbox
        </label>
      </div>
      <div class="flex flex-col gap-2 p-6 border-2 rounded">
        <h3 class="font-semibold text-xl">Result</h3>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="flex flex-wrap items-center">
          <md-checkbox
            checked={state === 'checked'}
            indeterminate={state === 'indeterminate'}
            {disabled} />
          Checked
        </label>
      </div>
    </div>
  </Example>
  <ThemingCheckboxes />
</div>
