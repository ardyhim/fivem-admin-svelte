<script lang="ts">
  import VisibilityProvider from './providers/VisibilityProvider.svelte';
  import HelloWorld from './components/AdminDashboard.svelte';
  import { debugData } from './utils/debugData';
    import BennysMenu from './lib/components/bennys/BennysMenu.svelte';

  debugData([
    {
      action: 'setVisible',
      data: true,
    },
  ]);
</script>

<VisibilityProvider>
  <div class="w-screen h-screen">
    <div class="absolute bottom-0 w-auto h-48 border bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg py-5">
      <BennysMenu/>
    </div>
  </div>
</VisibilityProvider>
