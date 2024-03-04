<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { visibility } from "$lib/store/stores";
  import { isEnvBrowser } from "$lib/utils/misc";

  let browser = isEnvBrowser();
  let isVisible: boolean;

  visibility.subscribe((visible) => {
    isVisible = visible;
  });

  function setVisible(visible: boolean) {
    visibility.set(visible);
  }
</script>

{#if browser}
  <div class="absolute left-2 top-2">
    <div class="p-5 border rounded space-y-5 text-left">
      <h1 class="font-bold text-lg">Debug Overlay</h1>

      <div class="w-44 space-y-5">
        <div class="flex flex-col text-left">
          <p>Visible: {isVisible.toString()}</p>
        </div>

        <div class="flex flex-col gap-y-2">
          <Button on:click={() => setVisible(true)}>Show NUI</Button>
          <Button on:click={() => setVisible(false)}>Hide NUI</Button>
        </div>
      </div>
    </div>
  </div>
{/if}
