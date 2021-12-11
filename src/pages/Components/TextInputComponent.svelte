<script>
  import Nav from "./Nav/Nav.svelte";
  import Page from "../Page.svelte";
  import Input from "../../components/input/Input.svelte";
  import Columns from "../../components/columns/Columns.svelte";
  import { MediaName, Status } from "../../models/types";
  // import adjustable from "../../components/adjustable/Adjustablef";
  import Adjustable from "../../components/adjustable/Adjustable.svelte";
  import BlueThing from "./BlueThing.svelte";
  import RedThing from "./RedThing.svelte";
  import Retry from "../../components/retry/Retry.svelte";
  import Card from "../../components/card/Card.svelte";

  let valueOne;
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

  let status = Status.PENDING;
  function setStatusPending() {
    status = Status.PENDING;
  }

  function setStatusError() {
    status = Status.ERROR;
  }

  function setStatusDefault() {
    status = Status.DEFAULT;
  }

  function retry() {
    status = Status.PENDING;
    setTimeout(() => (status = Status.DEFAULT), 300);
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
        hint="Type something will ya"
      />
    </div>
    <div>
      <Input
        name="text-input-demo"
        label="Demo input"
        props={{
          minLength: 3,
          maxLength: 10,
          required: true,
        }}
        bind:value={valueTwo}
        hint="Type something will ya"
        messages={{
          valueMissing: "This value is required",
          tooShort: "Input is too short",
          tooLong: "Input is too long",
        }}
      />
    </div>

    <div class="full">
      <hr />
    </div>

    <div>
      <Input name="text-input-demo" bind:value={valueTwo} />
    </div>
  </Columns>

  <button on:click={setStatusPending}> status pending </button>

  <button on:click={setStatusError}> status error </button>

  <button on:click={setStatusDefault}> status default </button>

  <div class="retry-component">
    <Retry {status} {retry}>
      <Card>
        This is because size is a property on the element, but class is not.
        Because Svelte detects a size property, it chooses to set that property
        instead of an attribute. There is no class property, so Svelte sets it
        as an attribute instead. That’s not a problem or something that changes
        how we expect the component to behave, but can be very confusing if
        you’re unaware of it, because there’s a disconnect between the HTML you
        think you’re writing and what Svelte actually outputs.
      </Card>
    </Retry>
  </div>

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

  <!-- <Adjustable name={redProp}>
    <svelte:component this={component} evil={valueOne} />
    {#if isRed}
      <RedThing {redProp} />
    {:else}
      <BlueThing />
    {/if}
  </Adjustable> -->

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

  .retry-component {
    margin: 20px 0 100px 0;
  }
</style>
