<script>
  import {
    getLineColorByName,
    getLinePathByName,
    MARGIN_LEFT,
    MARGIN_TOP,
  } from './utils'
  
  export let hovered

  $: d = getLinePathByName(hovered)
  $: stroke = getLineColorByName(hovered)
</script>

<g transform={`translate(${MARGIN_LEFT}, ${MARGIN_TOP})`}>
  <path d={d} stroke="white" fill="none" stroke-width="4" />
  <path d={d} stroke={stroke} fill="none" stroke-width="2" />
</g>

