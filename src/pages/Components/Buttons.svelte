<script>
  import Nav from "./Nav/Nav.svelte";
  import Page from "../Page.svelte";
  import Button from "../../components/buttons/Button.svelte";
  import Action from "../../components/buttons/Action.svelte";
  import Heart from "../../components/icons/Heart.svelte";
</script>

<Page title="Buttons">
  <Nav />

  <h1>Buttons</h1>

  <Button onClick={() => {}}>Regular button</Button>
  <hr />
  <Button disabled onClick={() => {}}>Disabled button</Button>
  <hr />
  <Button ghost onClick={() => {}}>Ghost button</Button>
  <hr />
  <Button small onClick={() => {}}>Small button</Button>
  <hr />
  <div class="actions">
    <Action onClick={() => {}}>
      <Heart />
    </Action>
    <Action ghost onClick={() => {}}>
      <Heart />
    </Action>
    <Action transparent onClick={() => {}}>
      <Heart />
    </Action>
    <Action disabled onClick={() => {}}>
      <Heart />
    </Action>
    <Action small onClick={() => {}}>
      <Heart />
    </Action>
  </div>
  <hr />
  <Button transparent onClick={() => {}}>Transparent button</Button>
  <hr />
  One <Button asLink onClick={() => {}}>As link button</Button> Two
</Page>

<style lang="scss">
  .actions {
    display: flex;
    align-items: flex-start;
  }
</style>
