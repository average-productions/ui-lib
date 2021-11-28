<script lang="ts">
  export let required: boolean;
  export let maxLength: number;
  export let value: string;
</script>

{#if required}
  {#if value}
    <div class="required-tag">{value.length} / {maxLength}</div>{:else}
    <div class="required-tag">Required</div>
  {/if}
{/if}

<style lang="scss">
</style>
