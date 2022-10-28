<svelte:options tag="my-child" />

<script>
  import SubChild from "./SubChild.svelte";
</script>

<span>
  <SubChild>
    <slot />
  </SubChild>
</span>

<style>
  span {
    color: white;
    background-color: green;
    padding: 4px;
  }
</style>
