<script lang="ts">
  import { nanoid } from "nanoid";
  const id = nanoid();
  import type { Dynamic } from "../../models/types";
  import Label from "./Label.svelte";
  export let value;
  export let name;
  export let label = "";
  export let props: Dynamic = {};
  export let valid = true;

  let input;

  const onBlur = () => {
    valid = input.validity.valid;
    console.log("valid", valid);
  };
</script>

<div
  class={`input-wrapper ${valid === false && "has-error"} ${
    !!value ? "has-value" : ""
  }`}
>
  <label for={id}>
    <Label {value} {props} {label} />

    <div class="input-field">
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
</div>

<style lang="scss">
  @import "../../ui/media.scss";

  .hide {
    display: none;
  }

  .input-wrapper {
    display: block;

    &.has-error {
      .input-field {
        border: 1px solid var(--red);
      }

      input {
        border: 1px solid var(--red);
      }
    }
  }

  .input-wrapper > label {
    &:hover,
    &:focus-within {
      .input-field {
        border: 1px solid var(--color-slate);
        box-shadow: 0 0 16px -6px var(--color-slate);
      }

      input {
        border: 1px solid var(--color-slate);
      }
    }
  }

  .input-field {
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
