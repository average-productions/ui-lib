<script>
  import Tablet from "./Tablet.svelte";
  import Mobile from "./Mobile.svelte";

  const TABLET_WIDTH = 768;

  const isSmall = window.matchMedia(`(max-width: ${TABLET_WIDTH}px)`).matches;
</script>

<nav id="component-nav">
  {#if isSmall}
    <Mobile />
  {:else}
    <Mobile />
  {/if}
</nav>

<style>
  #component-nav {
    margin: 0 0 40px 0;
  }
</style>
