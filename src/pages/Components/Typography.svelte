<script>
  import Nav from "./Nav/Nav.svelte";
  import Page from "../Page.svelte";
</script>

<Page title="Typography">
  <Nav />
  <h1>&lt;H1&gt; Typography</h1>
  <h2>&lt;H2&gt; Typography</h2>
  <h3>&lt;H3&gt; Typography</h3>
  <h4>&lt;H4&gt; Typography</h4>
  <h5>&lt;H5&gt; Typography</h5>
  <h6>&lt;H6&gt; Typography</h6>

  <hr />

  <p>
    <strong>Paragraph</strong>: I must go down to the seas again, to the lonely
    sea and the sky, And all I ask is a tall ship and a star to steer her by;
    And the wheel’s kick and the wind’s song and the white sail’s shaking, And a
    grey mist on the sea’s face, and a grey dawn breaking.
  </p>
</Page>

<style>
  p {
    max-width: 680px;
  }
</style>
