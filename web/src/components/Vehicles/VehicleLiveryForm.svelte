<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Select from "$lib/components/ui/select";
  import { onMount } from "svelte";
  import { fetchNui } from "../../utils/fetchNui";
  const liveries = [1, 2, 3, 4, 5];
  const save = async (event: any) => {
    let res = await fetchNui("him-getLivery", { index: 1 });
  };

  onMount(async () => {
    let res = await fetchNui("him-getLivery", { index: 1 });
  });
</script>

<div class="flex flex-col gap-1 m-2">
  <Select.Root>
    <Select.Trigger class="w-full">
      <Select.Value placeholder="Select a livery" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        <Select.Label>Liveries</Select.Label>
        {#each liveries as livery, index}
          <Select.Item value={livery} label="Livery {index}">
            Livery {index}
          </Select.Item>
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name="favoriteLivery" />
  </Select.Root>
  <Button on:click={save} type="button" class="w-full p-5">SAVE</Button>
</div>
