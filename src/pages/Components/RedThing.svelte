<script lang="ts">
  export let evil;
  import { beforeUpdate, afterUpdate, onMount, onDestroy } from "svelte";
  beforeUpdate(async () => {
    console.log("red updates");
  });

  let fucker = "fucker";

  const updateFucker = () => {
    if (fucker === "fucker") {
      fucker = "ficker";
    } else {
      fucker = "fucker";
    }
  };
</script>

<strong
  >Red thing {evil}
  {fucker}
  <button on:click={updateFucker}>update fucker</button></strong
>

<style>
  strong {
    background-color: red;
    opacity: 0.4;
    opacity: 1;
    display: block;
    height: 100px;
  }
</style>
