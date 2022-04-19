<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { PendingType, Status } from "../../models/types";
  import Adjustable from "../adjustable/Adjustable.svelte";
  import Error from "./Error.svelte";
  import Pending from "./Pending.svelte";
  export let status: Status = Status.DEFAULT;
  export let retry;
  export let errorText = "";
</script>

<Adjustable name={status}>
  {#if status === Status.PENDING}
    <Pending type={PendingType.SPINNER} />
  {:else if status === Status.ERROR}
    <Error {retry} {errorText} />
  {:else}
    <slot />
  {/if}
</Adjustable>
