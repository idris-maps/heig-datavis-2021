<script>
  import { WIDTH, HEIGHT, MARGIN_BOTTOM } from './utils'
  export let year

  const YEAR_DISPLAY_SIZE = 100
</script>

<text
  x={WIDTH}
  y={HEIGHT - MARGIN_BOTTOM - YEAR_DISPLAY_SIZE * 0.25}
  font-size={YEAR_DISPLAY_SIZE}
  text-anchor={'end'}
  opacity={0.5}
>
  {year}
</text>