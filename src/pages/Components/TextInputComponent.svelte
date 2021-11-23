<script>
  import Nav from "./Nav/Nav.svelte";
  import Page from "../Page.svelte";
  import Input from "../../components/input/Input.svelte";
  import Columns from "../../components/columns/Columns.svelte";
  import { MediaName } from "../../models/types";

  let valueOne = "Demo input";
  let valueTwo = "Demo input";

  $: console.log("value", valueOne);
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
        valid={false}
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
      <Input name="text-input-demo" required bind:value={valueTwo} />
    </div>
  </Columns>
</Page>

<style lang="scss">
  div {
    margin: 20px 0 0 0;
  }
</style>
