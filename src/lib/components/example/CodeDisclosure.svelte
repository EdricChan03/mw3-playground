<script lang="ts">
  export let title: string;
</script>
<details class="border rounded border-slate-700">
  <summary class="p-3">{title}</summary>
  <pre class="p-3 overflow-auto"><code><slot /></code></pre>
</details>
