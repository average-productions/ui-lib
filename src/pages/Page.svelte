<script>
  export let title;
</script>

<svelte:head>
  <title>{title ? `${title} | UI Lib` : "UI Lib"}</title>
</svelte:head>

<div class="page">
  <section>
    <article>
      <slot />
    </article>
  </section>
</div>

<style lang="scss">
  .page {
    padding: calc(var(--header-height) + 20px) 0 40px 0;
  }
</style>
