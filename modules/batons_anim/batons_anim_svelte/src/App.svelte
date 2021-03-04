<script>
import Baton from './Baton.svelte'
import {
  DATA,
  WIDTH,
  HEIGHT,
  MARGIN,
} from './utils'

let key = 'population'
</script>

<select on:input={e => key = e.target.value}>
  <option value="population">Population</option>
  <option value="superficie">Superficie (km2)</option>
  <option value="densite">Densité (p/km2)</option>
</select>

<svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
  <g transform={`translate(${MARGIN / 2}, 0)`}>
    {#each DATA as d, i}
      <Baton d={d} i={i} key={key} />
    {/each}
  </g>
</svg>
