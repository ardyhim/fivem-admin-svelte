<script lang="ts">
  import VisibilityProvider from './providers/VisibilityProvider.svelte';
  import HelloWorld from './components/AdminDashboard.svelte';
  import { debugData } from './utils/debugData';

  debugData([
    {
      action: 'setVisible',
      data: true,
    },
  ]);
</script>

<main>
  <VisibilityProvider>
    <div class="grid grid-cols-2 gap-4 place-items-end p-10">
      <div></div>
      <HelloWorld />
    </div>
  </VisibilityProvider>
</main>
