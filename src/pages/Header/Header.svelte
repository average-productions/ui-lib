<script>
  import { Link } from "svelte-navigator";
  import { routes } from "../routes";
</script>

<header>
  <article>
    <nav>
      <ul>
        <li>
          <Link to={routes.HOME.path}><strong>{routes.HOME.label}</strong></Link
          >
        </li>
        <li>
          <Link to={routes.COMPONENTS.path}
            ><strong>{routes.COMPONENTS.label}</strong></Link
          >
        </li>
      </ul>
    </nav>
  </article>
</header>

<style>
  header {
    height: var(--header-height);
    position: fixed;
    width: 100%;
    top: 0;
  }
</style>
