<script>
  import Nav from "./Nav/Nav.svelte";
  import Page from "../Page.svelte";
  import Input from "../../components/input/Input.svelte";
  import Columns from "../../components/columns/Columns.svelte";

  let valueOne = "Demo input";
  let valueTwo = "Demo input";

  $: console.log("value", valueOne);
</script>

<Page title="Text input">
  <Nav />

  <h1>Text input</h1>

  <Columns media="desktop">
    <div>
      <Input
        name="text-input-demo"
        required
        label="Demo input"
        bind:value={valueOne}
      />
    </div>
    <div>
      <Input name="text-input-demo" label="Demo input" bind:value={valueTwo} />
    </div>

    <div>
      <Input name="text-input-demo" bind:value={valueTwo} />
    </div>
  </Columns>
</Page>

<style lang="scss">
</style>
