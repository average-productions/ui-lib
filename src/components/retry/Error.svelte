<script lang="ts">
  import Button from "../buttons/Button.svelte";

  export let errorText = "";
  export let retry;
</script>

<div class="error">
  <strong>Ooh no!</strong> Something went wrong.
  {#if errorText}
    <p>
      {errorText}
    </p>
  {/if}
  {#if retry}
    <div>
      <Button onClick={retry}>Try again?</Button>
    </div>
  {/if}
</div>

<style lang="scss">
  @import "../../ui/media.scss";

  .error {
    max-width: $landscape;
    margin: 0 auto;
    text-align: center;

    & > div {
      margin: 20px 0;
    }
  }
</style>
