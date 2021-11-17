<script>
  export let change;
  export let options = [];
  export let name = "";
  export let label = "";
  export let value = "";
  export let status = "default";
</script>

<label for={name} class={status}>
  {#if label}
    <div class="input-label">{label}</div>
  {/if}
  <select on:change={change} {name} {value}>
    {#each options as option}
      <option value={option.value} disabled={option.disabled}
        >{option.label}</option
      >
    {/each}
  </select>
</label>

<style lang="scss">
  @import "../../../ui/media.scss";

  .input-label {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    padding: 0 0 4px 0;

    @include tablet {
      font-size: 1.7rem;
    }
  }

  select {
    height: 38px;
    line-height: 36px;
    padding: 0 5px;
    color: var(--color-text);
    border: 1px solid var(--color-input-border);
    border-radius: 5px;
    display: block;
    width: 100%;
    font-size: 1.6rem;
    font-family: inherit;
    background-color: var(--color-fg);

    @include tablet {
      font-size: 1.8rem;
      height: 42px;
      line-height: 40px;
      padding: 0 9px;
    }
  }
</style>
