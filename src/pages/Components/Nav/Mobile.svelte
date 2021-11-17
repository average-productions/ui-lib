<script>
  import { componentRoutes, routes } from "../../routes";
  import { useNavigate } from "svelte-navigator";
  import NavDropdown from "./NavDropdown.svelte";
  const value = window.location.pathname
    .split("/")
    .pop()
    .replace("components", "");
  const navigate = useNavigate();

  const handleChange = (val) => {
    navigate(`/${routes.COMPONENTS.path}/${val.target.value}`);
  };

  const opts = [
    {
      label: "Select component",
      value: "",
      disabled: true,
    },
  ].concat(
    Object.values(componentRoutes).map((item) => ({
      label: item.label,
      value: item.path,
      disabled: false,
    }))
  );
</script>

<!-- <select on:change={handleChange} value={tag}>
  <option disabled value="components"> Select component </option>
  {#each Object.values(componentRoutes) as route (route.path)}
    <option value={route.path}>
      {route.label}
    </option>
  {/each}
</select> -->

<!-- <Dropdown name="dropdown" label="Droppe" bind:value options={opts} /> -->

<NavDropdown
  change={handleChange}
  name="component-nav-dropdown"
  options={opts}
  {value}
/>
