<script>
  let value
</script>

<div>
  <h2>Utiliser une valeur</h2>
  <input on:keyup={e => value = e.target.value} />
  <p>Salut {value}</p>
</div>
