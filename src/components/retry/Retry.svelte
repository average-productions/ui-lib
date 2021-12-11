<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { PendingType, Status } from "../../models/types";
  import Adjustable from "../adjustable/Adjustable.svelte";
  import Pending from "./Pending.svelte";
  export let status: Status = Status.DEFAULT;
  export let retry;
</script>

<Adjustable name={status}>
  {#if status === Status.PENDING}
    <Pending />
  {:else if status === Status.ERROR}
    <div class="retry-error">error</div>
  {:else}
    <slot />
  {/if}
</Adjustable>

<style lang="scss">
  .retry-error {
    height: 300px;
    background-color: red;
  }
</style>
