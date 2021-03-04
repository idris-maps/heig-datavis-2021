<script>
  export let onChange
</script>

<input
  type="range"
  min="1800"
  max="2020"
  value="2020"
  on:input={e => onChange(Number(e.target.value))}
/>

<style>
input {
  width: 100%;
  background: #f1f1f1;
}

input::-webkit-slider-thumb, input::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: rgb(109, 109, 109);
  cursor: pointer;
}
</style>