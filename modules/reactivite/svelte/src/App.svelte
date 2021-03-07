<script>
  const toNum = d => {
    const n = Number(d)
    return Number.isNaN(d) ? 0 : n
  }
  
  let valeurA = 1
  let valeurB = 2
  $: a = toNum(valeurA)
  $: b = toNum(valeurB)
</script>

<input type="number" bind:value={valeurA} />
<input type="number" bind:value={valeurB} />

<p>{a} + {b} = {a + b}</p>
<p>{a} - {b} = {a - b}</p>
<p>{a} * {b} = {a * b}</p>
<p>{a} / {b} = {a / b}</p>