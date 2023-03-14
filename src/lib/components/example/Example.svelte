<script lang="ts">
  export let title = 'Example';
</script>
<section class="flex flex-col gap-3 border-2 rounded">
  <slot name="title"><h3 class="text-xl px-3 pt-3">{title}</h3></slot>
  <slot />
</section>
