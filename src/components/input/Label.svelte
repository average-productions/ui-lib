<script lang="ts">
  import type { Dynamic } from "../../models/types";
  import RequiredTag from "./RequiredTag.svelte";

  export let label;
  export let value;
  export let props: Dynamic = {};
  const showLabel = !!label || props.required;
</script>

<div class={`input-label ${showLabel ? "" : "hide"}`}>
  {#if label}
    <div class="label">{label}</div>
  {:else}
    <div />
  {/if}
  <RequiredTag {value} required={props.required} maxLength={props.maxLength} />
</div>

<style lang="scss">
  .input-label {
    line-height: 1.4;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: 600;
  }

  :global(.input-wrapper.has-error .label) {
    background-color: var(--red);
    color: var(--white);
  }

  :global(.input-wrapper > label:hover .label, .input-wrapper
      > label:focus-within
      .label) {
    background-color: var(--color-slate);
    color: var(--white);
  }

  .label {
    flex: 0 0 auto;
    max-width: calc(100% - 100px);
    transition: background-color 300ms ease, color 300ms ease;
    padding: 0 10px;
    margin: 0 0 5px 0;
    border-radius: 5px;
  }
</style>
