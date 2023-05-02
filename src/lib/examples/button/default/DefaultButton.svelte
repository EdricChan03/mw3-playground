<script lang="ts">
  export let disabled = false;
</script>

<div class="flex gap-3 flex-wrap items-center p-6">
  <md-elevated-button {disabled}>Elevated</md-elevated-button>
  <md-filled-button {disabled}>Filled</md-filled-button>
  <md-outlined-button {disabled}>Outlined</md-outlined-button>
  <md-text-button {disabled}>Text</md-text-button>
  <md-tonal-button {disabled}>Tonal</md-tonal-button>
  <md-fab {disabled}><md-icon slot="icon">add</md-icon></md-fab>
  <md-fab label="Add" {disabled}><md-icon slot="icon">add</md-icon></md-fab>
  <md-branded-fab label="Add" {disabled}><md-icon slot="icon">add</md-icon></md-branded-fab>
</div>
