<script>
  import { nanoid } from "nanoid";
  const id = nanoid();
  export let value;
  export let name;
  export let label = "";
  export let required = false;
</script>

<label for={id} class={!!value ? "has-value" : ""}>
  <div class="input-label">
    {#if label}
      <div class="label">{label}</div>
    {:else}
      <div />
    {/if}
    {#if required}
      <div class="required-tag">Required</div>
    {/if}
  </div>

  <input {id} {name} bind:value {required} />
</label>

<style lang="scss">
  @import "../../ui/media.scss";

  .input-label {
    font-size: 1.5rem;
    line-height: 1.4;
    padding: 2px 0 4px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: 500;

    @include tablet {
      font-size: 1.7rem;
    }
  }

  label {
    border-radius: 5px;
    display: block;

    &:hover,
    &:focus-within {
      background-color: var(--color-slate);
      box-shadow: 0 0 16px -6px var(--color-slate);
      // background-color: #f2f2f2;

      // .input-label {
      //   border: 2px solid #c8c8c8;
      //   border-bottom: 0;
      // }

      .label {
        color: var(--white);
      }

      .required-tag {
        background-color: var(--color-slate);
        // background-color: #f2f2f2;
        color: var(--black300);
      }

      input {
        border: 2px solid var(--color-slate);
        // border: 2px solid #c8c8c8;
        padding: 0 7px;

        @include tablet {
          padding: 0 8px;
        }
      }
    }
  }

  .label {
    flex: 1 0 auto;
    max-width: calc(100% - 100px);
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
    border-radius: 5px;
    font-style: italic;
  }

  input {
    height: 38px;
    line-height: 36px;
    padding: 0 8px;
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
