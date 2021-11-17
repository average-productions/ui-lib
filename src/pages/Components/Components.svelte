<script>
  import { Route } from "svelte-navigator";
  import { componentRoutes } from "../routes";
  import Typography from "./Typography.svelte";
  import Buttons from "./Buttons.svelte";
  import ComponentsHome from "./ComponentsHome.svelte";
</script>

<Route path="/">
  <ComponentsHome />
</Route>

<Route path={componentRoutes.BUTTONS.path}>
  <Buttons />
</Route>

<Route path={componentRoutes.TYPOGRAPHY.path}>
  <Typography />
</Route>
