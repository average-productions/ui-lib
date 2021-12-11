<script lang="ts">
  import { PendingType, PendingType as Type } from "../../models/types";
  import Spinner from "./Spinner.svelte";

  import TextSkeleton from "./TextSkeleton.svelte";
  export let type: Type = PendingType.SPINNER;
</script>

<div class={`pending ${type}`}>
  {#if type === PendingType.SPINNER}
    <Spinner />
  {:else}
    <TextSkeleton />
  {/if}
</div>

<style lang="scss">
  .pending.spinner {
    padding: 20px;
    display: flex;
    justify-content: space-around;
  }
</style>
