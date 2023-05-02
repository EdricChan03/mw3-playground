<script lang="ts">
  export let disabled = false;
</script>

<div class="flex gap-3 flex-wrap items-center p-6">
  <div
    class="flex flex-col gap-3 p-3 border-2 border-red-500 bg-red-300/25 rounded shrink-0 basis-full"
  >
    <div class="flex gap-3 flex-1">
      <md-icon class="basis-6 shrink-0" aria-hidden="true">error</md-icon>
      <p>
        From <a
          href="https://github.com/material-components/material-web/releases/tag/v1.0.0-pre.5"
          class="underline text-blue-700 hover:text-blue-800"><code>1.0.0-pre.5</code></a
        >, <abbr title="Floating Action Button">FABs</abbr> no longer support specifying the
        <code>disabled</code> attribute.
      </p>
    </div>
    <md-outlined-button
      trailingIcon
      href="https://github.com/material-components/material-web/issues/4045"
      class="self-end">Learn more<md-icon slot="icon">open_in_new</md-icon></md-outlined-button
    >
  </div>
  <md-elevated-button {disabled}>Elevated</md-elevated-button>
  <md-filled-button {disabled}>Filled</md-filled-button>
  <md-outlined-button {disabled}>Outlined</md-outlined-button>
  <md-text-button {disabled}>Text</md-text-button>
  <md-tonal-button {disabled}>Tonal</md-tonal-button>
  <md-fab {disabled}><md-icon slot="icon">add</md-icon></md-fab>
  <md-fab label="Add" {disabled}><md-icon slot="icon">add</md-icon></md-fab>
  <md-branded-fab label="Add" {disabled}><md-icon slot="icon">add</md-icon></md-branded-fab>
</div>
