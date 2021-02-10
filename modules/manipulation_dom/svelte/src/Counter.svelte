<script>
  let count = 0
</script>

<div>
  <h2>Compter les clicks</h2>
  <button on:click={e => count = count + 1}>{count}</button>
</div>
