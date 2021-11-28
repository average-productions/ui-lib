<script>
  import Nav from "./Nav/Nav.svelte";
  import Page from "../Page.svelte";
  import Input from "../../components/input/Input.svelte";
  import Columns from "../../components/columns/Columns.svelte";
  import { MediaName } from "../../models/types";
  // import adjustable from "../../components/adjustable/Adjustablef";
  import Adjustable from "../../components/adjustable/Adjustable.svelte";
  import BlueThing from "./BlueThing.svelte";
  import RedThing from "./RedThing.svelte";

  let valueOne = "Demo input";
  let valueTwo = "Demo input";

  let redProp = "visible";

  let component = RedThing;
  let isRed = true;

  function handleClick() {
    if (isRed) {
      isRed = false;
      redProp = "hidden";
      component = BlueThing;
    } else {
      isRed = true;
      redProp = "visible";
      component = RedThing;
    }
  }

  // function updateProp() {
  //   if (redProp === "visible") {
  //     redProp = "hidden";
  //   } else {
  //     redProp = "visible";
  //   }
  // }

  function resetProp() {
    isRed = false;
    redProp = "hidden";
    component = BlueThing;
  }
</script>

<Page title="Text input">
  <Nav />

  <h1>Text input</h1>

  <Columns media={MediaName.TABLET}>
    <div>
      <Input
        name="text-input-demo"
        label="Demo input"
        bind:value={valueOne}
        props={{
          required: true,
        }}
      />
    </div>
    <div>
      <Input
        name="text-input-demo"
        label="Demo input"
        props={{
          minLength: "3",
          maxLength: "10",
          required: true,
        }}
        bind:value={valueTwo}
      />
    </div>

    <div class="full">
      <hr />
    </div>

    <div>
      <Input name="text-input-demo" bind:value={valueTwo} />
    </div>
  </Columns>

  <button on:click={handleClick}> toggle </button>
  <!-- <button on:click={updateProp}> updateProp </button> -->
  <button on:click={resetProp}> resetProp </button>

  <p>
    The path of the righteous man is beset on all sides By the inequities of the
    selfish and the tyranny of evil men Blessed is he who, in the name of
    charity and good will Shepherds the weak through the valley of darkness For
    he is truly his brother's keeper and the finder of lost children And I will
    strike down upon thee With great vengeance and furious anger Those who
    attempt to poison and destroy my brothers And you will know my name is the
    Lord When I lay my vengeance upon thee
  </p>

  <Adjustable name={redProp}>
    <svelte:component this={component} evil={valueOne} />
    <!-- {#if isRed}
      <RedThing {redProp} />
    {:else}
      <BlueThing />
    {/if} -->
  </Adjustable>

  <p>
    The path of the righteous man is beset on all sides By the inequities of the
    selfish and the tyranny of evil men Blessed is he who, in the name of
    charity and good will Shepherds the weak through the valley of darkness For
    he is truly his brother's keeper and the finder of lost children And I will
    strike down upon thee With great vengeance and furious anger Those who
    attempt to poison and destroy my brothers And you will know my name is the
    Lord When I lay my vengeance upon thee
  </p>
</Page>

<style lang="scss">
  div {
    margin: 20px 0 0 0;
  }
</style>
