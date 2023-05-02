<script lang="ts">
  import '@material/web/radio/radio';

  import type { MdCheckbox } from '@material/web/checkbox/checkbox';
  import type { MdRadio } from '@material/web/radio/radio';

  import type { CheckboxState } from './types';

  let state: CheckboxState = 'unchecked';
  const onStateChange = (ev: Event) => {
    state = (ev.target as MdRadio).value as CheckboxState;
  };

  let disabled = false;
  const onDisabledChange = (ev: Event) => {
    disabled = (ev.target as MdCheckbox).checked;
  };
</script>

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
        {disabled}
      />
      Checked
    </label>
  </div>
</div>
