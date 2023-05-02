<script lang="ts">
  import '@material/web/checkbox/checkbox';

  import Example from '$lib/components/example/Example.svelte';

  import ThemingCheckboxes from '$examples/checkbox/theming/ThemingCheckbox.svelte';
  import DefaultCheckbox from '$examples/checkbox/default/DefaultCheckbox.svelte';
  import StateCheckbox from '$examples/checkbox/state/StateCheckbox.svelte';

</script>

<div class="flex flex-col gap-4">
  <Example title="Default" id="checkbox-default">
    <DefaultCheckbox />
  </Example>
  <Example title="States" id="checkbox-state">
    <StateCheckbox />
  </Example>
  <Example title="Theming" id="checkbox-theming">
    <ThemingCheckboxes />
  </Example>
</div>
