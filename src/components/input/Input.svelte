<script lang="ts">
  import type { Dynamic } from "../../models/types";
  import Label from "./Label.svelte";
  import InputStatus from "./InputStatus.svelte";
  import Edit from "../icons/Edit.svelte";
  import { Status } from "../../models/types";
  import { nanoid } from "nanoid";
  import InputIcon from "./InputIcon.svelte";

  const id = nanoid();
  export let name: string;
  export let value = "";
  export let label = "";
  export let props: Dynamic = {};
  export let messages: Dynamic = {};
  export let hint = "";
  export let valid = true;
  let status: Status = Status.DEFAULT;
  let input: HTMLInputElement;
  let error = "";

  const onBlur = () => {
    valid = input.validity.valid;
    if (!valid) {
      status = Status.ERROR;
      let propName = "";
      for (let key in input.validity) {
        if (input.validity[key]) {
          propName = key;
        }
      }
      error = messages[propName] || "Something is wrong";
    } else {
      status = Status.SUCCESS;
    }
  };
</script>

<div
  class={`input-wrapper ${status}`}
  class:has-value={!!value}
  class:has-label={!!label}
>
  <label for={id}>
    <Label {value} {props} {label} />

    <div class="input-field">
      <input
        {id}
        {name}
        {...props}
        on:blur={onBlur}
        bind:value
        bind:this={input}
      />
      <InputIcon type={props.type} {status} />
    </div>
  </label>

  <InputStatus {status}>
    <i slot="hint">{hint}</i>
    <i slot="has-error">{error}</i>
  </InputStatus>
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
    position: relative;
  }

  input {
    height: 36px;
    line-height: 34px;
    padding: 0 8px;
    color: var(--color-text);
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
      height: 40px;
      line-height: 38px;
    }
  }

  :global(.input-wrapper + .button) {
    margin-bottom: 26px;

    @include tablet {
      margin-bottom: 29px;
    }
  }
</style>
