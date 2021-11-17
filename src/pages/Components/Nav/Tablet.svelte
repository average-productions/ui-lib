<script>
  import { routes } from "../../routes";
  import { useNavigate, useLocation } from "svelte-navigator";

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (val) => {
    navigate(val.target.value);
  };

  $: selected = $location.pathname;
</script>

<select on:change={handleChange} value={selected}>
  {#each Object.values(routes) as route}
    <option value={route.path}>
      {route.label}
    </option>
  {/each}
</select>
