<script>
  import { MARGIN_LEFT, MARGIN_TOP } from './utils'
  export let hovered
</script>

{#if Boolean(hovered)}
  <text
    x={hovered.position[0] + MARGIN_LEFT}
    y={hovered.position[1] + MARGIN_TOP - 5}
    font-size="12"
    text-anchor="middle"
    fill="white"
    stroke="white"
    stroke-width="2"
    >{hovered.name}</text>
  <text
    x={hovered.position[0] + MARGIN_LEFT}
    y={hovered.position[1] + MARGIN_TOP - 5}
    font-size="12"
    text-anchor="middle"
  >{hovered.name}</text>
{/if}
