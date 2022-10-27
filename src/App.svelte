<script lang="ts">
  import Parent from "./lib/Parent.svelte";
  import Child from "./lib/Child.svelte";
  import SvelteInSvelte from "./lib/SvelteInSvelte.svelte";
  import "./lib/ParentWC.wc.svelte";
  import "./lib/ChildWC.wc.svelte";
  import "./lib/SvelteInWC.wc.svelte";
</script>

<Parent><Child>svelte in svelte</Child></Parent>
<Parent><my-child>wc in svelte</my-child></Parent>
<my-parent><Child>svelte in wc</Child></my-parent>
<my-parent><my-child>wc in wc</my-child></my-parent>
<SvelteInSvelte />
<my-svelteinwc />

<ul>
  <li>
    Svelte component styling does not work, but nested svelte component works
  </li>
  <li>WC component styling works, but nested svelte component does not work</li>
  <li>Hot-reloading makes everything look like normal svelte components</li>
</ul>
