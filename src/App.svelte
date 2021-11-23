<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import { routes } from "./pages/routes";
  import Page from "./pages/Page.svelte";
  import Header from "./pages/Header/Header.svelte";
  import Footer from "./pages/Footer/Footer.svelte";
  import Components from "./pages/Components/Components.svelte";
</script>

<div class="app">
  <Router>
    <main>
      <Header />
      <Route path={routes.HOME.path}>
        <Page title="Home">Home</Page>
      </Route>
      <Route path={`${routes.COMPONENTS.path}/*`}>
        <Components />
      </Route>
      <Footer />
    </main>
  </Router>
</div>

<style>
  main {
    background-color: var(--color-bg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
</style>
