<script>
  import Counter from './Counter.svelte'
  import Name from './Name.svelte'
  import List from './List.svelte'
</script>

<div>
  <h1>Manipulation DOM</h1>
  <Counter />
  <Name />
  <List data={[1, 2, 3, 4, 5]} />
</div>
