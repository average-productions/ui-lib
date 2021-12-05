<script lang="ts">
  export let required: boolean;
  export let maxLength: number;
  export let value: string;
</script>

{#if required}
  {#if value && typeof maxLength === "number"}
    <div class="required-tag">{value.length} / {maxLength}</div>{:else}
    <div class="required-tag">Required</div>
  {/if}
{/if}

<style lang="scss">
  :global(.input-wrapper.has-error .required-tag) {
    background-color: transparent;
    color: var(--color-input-tag);
  }

  :global(.input-wrapper > label:hover .required-tag, .input-wrapper
      > label:focus-within
      .required-tag) {
    background-color: transparent;
    color: var(--color-input-tag);
  }

  :global(.input-wrapper.has-value .required-tag) {
    background-color: transparent;
    color: var(--color-input-tag);
  }

  .required-tag {
    color: var(--white);
    background-color: var(--blue700);
    flex: 0 0 auto;
    padding: 0 5px;
    margin: 0 0 5px 0;
    border-radius: 5px;
    font-style: italic;
    transition: background-color 300ms ease, color 300ms ease;
  }
</style>
