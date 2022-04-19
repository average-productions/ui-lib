<script lang="ts">
  import { Status } from "../../models/types";
  import Calendar from "../icons/Calendar.svelte";
  import Disabled from "../icons/Disabled.svelte";
  import Edit from "../icons/Edit.svelte";
  import Error from "../icons/Error.svelte";
  import Success from "../icons/Success.svelte";

  export let status;
  export let type = "text";
</script>

<div class="input-icon input-icon-disabled"><Disabled /></div>
<div class="input-icon input-icon-pending">P</div>
<div class="input-icon input-icon-error"><Error /></div>
<div class="input-icon input-icon-success"><Success /></div>
{#if type === "text"}
  <div class="input-icon input-icon-hint"><Edit /></div>
{:else if type === "date"}
  <div class="input-icon input-icon-hint"><Calendar /></div>
{/if}

<style lang="scss">
  @import "../../ui/media.scss";

  :global(.input-field .input-icon) {
    position: absolute;
    height: 36px;
    width: 36px;
    top: 0;
    right: 0;
    border-left: 1px solid var(--color-input-border);
    padding: 8px;
    fill: var(--color-link);
    transition: opacity 300ms ease;
    opacity: 0;

    @include tablet {
      height: 40px;
      width: 40px;
    }
  }

  .input-icon-hint {
    border-left: 1px solid var(--color-slate);
    background-color: var(--color-slate);
    fill: var(--color-bg);
  }

  .input-icon-error {
    border-left: 1px solid var(--red);
    background-color: var(--red);
    fill: var(--color-bg);
  }

  :global(.input-wrapper > label:hover .input-icon-hint, .input-wrapper
      > label:focus-within
      .input-icon-hint) {
    opacity: 1;
  }

  :global(.input-wrapper.has-error .input-icon-error) {
    opacity: 1;
  }
</style>
