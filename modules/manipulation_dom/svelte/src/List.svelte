<script>
  export let data
</script>

<div>
  <h2>Itérer</h2>
  <ul>
    {#each data as d}
      <li>{d}</li>
    {/each}
  </ul>
</div>
