<script lang="ts">
  import Button from "./Button.svelte";
  export let onClick;
  export let data: any = {};
  export let ghost: boolean = false;
  export let transparent: boolean = false;
  export let disabled: boolean = false;
  export let small: boolean = false;
</script>

<Button action {small} {disabled} {onClick} {transparent} {data} {ghost}>
  <slot />
</Button>
