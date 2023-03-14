<script lang="ts">
  export let title: string;
</script>
<details class="mx-6 border rounded border-slate-700">
  <summary class="p-3">{title}</summary>
  <pre class="p-3"><code><slot /></code></pre>
</details>
