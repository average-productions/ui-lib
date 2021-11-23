<script lang="ts">
  import { nanoid } from "nanoid";
  import type { Dynamic } from "../../models/types";
  const id = nanoid();
  export let value;
  export let name;
  export let label = "";
  export let props: Dynamic = {};
  export let valid;

  let input;

  const onBlur = () => {
    valid = input.validity.valid;
    console.log("valid", valid);
  };

  const showLabel = !!label || props.required;
</script>

<label
  for={id}
  class={`${valid === false && "has-error"} ${!!value ? "has-value" : ""}`}
>
  <div class={`input-label ${!showLabel && "hide"}`}>
    {#if label}
      <div class="label">{label}</div>
    {:else}
      <div />
    {/if}
    {#if props.required}
      <div class="required-tag">Required</div>
    {/if}
  </div>

  <div class="input-wrapper">
    <input
      {id}
      {name}
      bind:value
      on:blur={onBlur}
      bind:this={input}
      {...props}
    />
  </div>
</label>

<style lang="scss">
  @import "../../ui/media.scss";

  .input-label {
    line-height: 1.4;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: 600;
  }

  .hide {
    display: none;
  }

  label {
    border-radius: 5px;
    display: block;

    &.has-error {
      .label {
        background-color: var(--red);
        color: var(--white);
      }

      .input-wrapper {
        border: 1px solid var(--red);
      }

      input {
        border: 1px solid var(--red);
        padding: 0 8px;
      }
    }

    &:hover,
    &:focus-within {
      .label {
        background-color: var(--color-slate);
        color: var(--white);
      }

      .input-wrapper {
        border: 1px solid var(--color-slate);
        box-shadow: 0 0 16px -6px var(--color-slate);
      }

      .required-tag {
        background-color: transparent;
        color: var(--color-input-tag);
      }

      input {
        border: 1px solid var(--color-slate);
        padding: 0 8px;
      }
    }
  }

  .label {
    flex: 0 0 auto;
    max-width: calc(100% - 100px);
    transition: background-color 300ms ease, color 300ms ease;
    padding: 0 10px;
    margin: 0 0 5px 0;
    border-radius: 5px;
  }

  .has-value {
    .required-tag {
      background-color: transparent;
      color: var(--color-input-tag);
    }
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

  .input-wrapper {
    border: 1px solid var(--color-input-border);
    border-radius: 5px;
    transition: box-shadow 300ms ease, border-color 300ms ease;
    box-shadow: 0 0 16px -6px transparent;
  }

  input {
    height: 38px;
    line-height: 36px;
    padding: 0 8px;
    color: var(--color-text);
    border: 1px solid var(--color-input-border);
    border: 1px solid transparent;
    border-radius: 5px;
    display: block;
    width: 100%;
    font-size: 1.6rem;
    font-family: inherit;
    background-color: var(--color-fg);
    transition: border-color 300ms ease;

    @include tablet {
      font-size: 1.8rem;
      height: 42px;
      line-height: 40px;
    }
  }
</style>
