<script lang="ts">
  import { base } from '$app/paths';
  import type { ComponentItem } from '$lib/data/types';

  export let baseUrl = `https://edricchan03.github.io${base}`;

  export let component: ComponentItem;

  $: title = `${component.label} - Material3 Playground`;
  $: desc = `Demos for the ${component.label} component from the @material/web npm package (https://npmjs.com/package/@material/web), an implementation of Google's Material Design 3 system (https://m3.material.io/) for the web.`;
  $: imgSrc = component.imgSrc;
</script>

<!-- Primary Meta Tags -->
<title>{component.label} - Material3 Playground</title>
<meta name="title" content={title} />
<meta name="description" content={desc} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={baseUrl} />
<meta property="og:title" content={title} />
<meta property="og:description" content={desc} />
<meta property="og:image" content={imgSrc} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={baseUrl} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={desc} />
<meta property="twitter:image" content={imgSrc} />
