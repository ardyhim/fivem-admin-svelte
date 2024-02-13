<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { hexToRgb } from "$lib/utils";
  import { fetchNui } from "../../utils/fetchNui";
  let color: string = "#fffff";
  const save = async (event: any) => {
    let res = await fetchNui("him-changeColorPrimary", hexToRgb(color));
    console.log("from web: " + res);
  };
</script>

<div class="flex flex-col gap-1 m-2">
  <Input type="color" name="color" bind:value={color} />
  <Button on:click={save} type="button" class="w-full">SAVE</Button>
</div>
