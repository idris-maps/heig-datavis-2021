<script>
import Camembert from './Camembert.svelte'

const DATA = [
  { annee: 1, valeurs: [23, 27] },
  { annee: 2, valeurs: [45, 12] },
  { annee: 3, valeurs: [56, 21] },
]

let annee = 1
$: valeurs1 = DATA.find(d => d.annee === annee)?.valeurs

let index = 0
$: valeurs2 = DATA[index]?.valeurs

setInterval(() => {
  if (index === DATA.length - 1) {
    index = 0
  } else {
    index = index + 1
  }
}, 1000)
</script>

<select on:input={e => annee = Number(e.target.value)}>
  {#each DATA as d}
    <option value={d.annee}>{d.annee}</option>
  {/each}
</select>

<div class="graph">
  <Camembert valeurs={valeurs1} />
  <Camembert valeurs={valeurs2} />
</div>

<style>
  .graph {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>