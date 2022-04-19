<script lang="ts">
  export let onClick;
  export let data: any = {};
  export let ghost: boolean = false;
  export let transparent: boolean = false;
  export let asLink: boolean = false;
  export let action: boolean = false;
  export let block: boolean = false;
  export let small: boolean = false;
  export let disabled: boolean = false;
  let preventDoubleClick;

  function internalClick(ev) {
    ev.preventDefault();
    if (preventDoubleClick) {
      return;
    }
    onClick(data);
    preventDoubleClick = setTimeout(() => (preventDoubleClick = false), 300);
  }
</script>

<button
  class="button"
  on:click={internalClick}
  class:action
  class:ghost
  class:block
  class:transparent
  class:small
  class:as-link={asLink}
  {disabled}
>
  <slot />
</button>

<style lang="scss">
  @import "../../ui/media.scss";

  button {
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 16px;
    background-color: var(--color-button);
    transition: background-color 300ms ease, box-shadow 300ms ease;
    border: 0;
    color: var(--color-fg);
    font-weight: 600;
    border-radius: 5px;
    font-family: inherit;
    box-shadow: 0 4px 16px -7px var(--color-button-shadow);
    cursor: pointer;

    @include tablet {
      height: 42px;
    }

    &.small {
      height: 28px;

      @include tablet {
        height: 34px;
      }
    }

    &:hover,
    &:focus,
    &:active {
      background-color: var(--color-button-hover);
      box-shadow: 0 4px 16px -7px transparent;
    }

    &.ghost {
      color: var(--color-button);
      border: 2px solid var(--color-button);
      background-color: var(--color-fg);
    }

    &.block {
      display: flex;
      width: 100%;
    }

    &.action {
      width: 38px;
      border-radius: 50%;
      padding: 8px;

      @include tablet {
        width: 42px;
      }

      &.ghost {
        padding: 6px;
      }

      &.small {
        height: 28px;
        width: 28px;

        @include tablet {
          height: 34px;
          width: 34px;
        }
      }
    }

    &.as-link {
      color: var(--color-link);
      box-shadow: none;
      display: inline-block;
      background-color: transparent;
      padding: 0;
      height: auto;
    }

    &.transparent {
      color: var(--color-link);
      background-color: transparent;
      box-shadow: 0 4px 16px -7px transparent;

      &:hover,
      &:focus,
      &:active {
        background-color: var(--blue150);
      }
    }

    &:disabled {
      pointer-events: none;
      background-color: var(--color-disabled-bg);
      color: var(--color-disabled-fg);
      box-shadow: 0 4px 16px -7px transparent;

      & > svg {
        fill: var(--color-disabled-bg);
      }
    }
  }

  :global(.action > svg) {
    fill: var(--color-fg);
  }

  :global(.action:disabled > svg) {
    fill: var(--color-disabled-fg);
  }

  :global(.action.ghost > svg, .action.transparent > svg) {
    fill: var(--color-button);
  }
</style>
