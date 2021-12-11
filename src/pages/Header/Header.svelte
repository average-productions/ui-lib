<script>
  import { Link } from "svelte-navigator";
  import { Theme, theme } from "../../state/theme";
  import { routes } from "../routes";

  function toggleTheme() {
    theme.update((prevTheme) =>
      prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    );
  }
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
        <li>
          <button on:click={toggleTheme}><strong>Toggle theme</strong></button>
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
