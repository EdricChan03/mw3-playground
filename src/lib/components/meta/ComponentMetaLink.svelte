<script lang="ts">
  import type { ComponentLink } from '$lib/data/types';

  export let link: ComponentLink;
</script>

<li class="basis-1/3">
  <a
    href={link.link}
    class="flex items-center gap-2 p-3 rounded focus:ring focus:ring-inset focus:ring-opacity-50 focus:ring-m3-secondary bg-m3-secondary-container text-m3-on-secondary-container transition-all"
  >
    <md-icon class="google-symbols" aria-hidden="true">{link.icon}</md-icon>
    {link.title}
    <span class="grow" />
    <md-icon aria-hidden="true">open_in_new</md-icon>
  </a>
</li>
