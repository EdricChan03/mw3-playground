<script lang="ts">
  export let title = 'Example';
  export let id: string;
</script>
<section class="flex flex-col gap-3 border-2 rounded scroll-m-24 {$$props.class}" {id}>
  <slot name="title"><h3 class="text-xl px-3 pt-3"><a href="#{id}">{title}</a></h3></slot>
  <slot />
</section>
