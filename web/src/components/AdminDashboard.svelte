<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { visibility } from "../store/stores";
  import { fetchNui } from "../utils/fetchNui";
  import AccordionAdmin from "./AccordionAdmin.svelte";

  interface ReturnData {
    x: number;
    y: number;
    z: number;
  }

  let clientData: ReturnData;

  const handleClientData = () => {
    fetchNui("getClientData")
      .then((returnData) => {
        clientData = returnData;
      })
      .catch((e) => {
        clientData = { x: 100, y: 100, z: 100 };
      });
  };

  const closeDialog = () => {
    visibility.set(false);
    fetchNui("hideUI");
  };
</script>

<div
  class="flex w-96 flex-col gap-5 border bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg p-5"
>
  <h1 class="pb-5 text-center text-2xl font-bold">Him Admin</h1>
  <div class="space-y-6">
    <AccordionAdmin />
  </div>
  <Button on:click={closeDialog}>Close</Button>
</div>

<style>
</style>
