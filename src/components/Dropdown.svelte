<script>
  export let value = "";
  export let options = [];
  export let name = "";
  export let label = "";
</script>

<label for={name}>
  {label}
  <select bind:value {name}>
    {#each options as option}
      <option value={option.value} disabled={option.disabled}
        >{option.label}</option
      >
    {/each}
  </select>
</label>

<style lang="scss">
</style>
