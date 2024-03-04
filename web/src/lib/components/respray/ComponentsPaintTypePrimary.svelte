<script lang="ts">
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Label } from "$lib/components/ui/label";
  import { dataPaintType } from "$lib/store/data";
  import { slide } from "svelte/transition";
  let data = dataPaintType.map((paint) => {
    return { paint, value: false };
  });

  function checkedChange(i: number) {
    for (let index = 0; index < data.length; index++) {
      if (data[index].value == true) data[index].value = false;
    }
    data[i].value = true;
  }
</script>

<div in:slide={{ duration: 250, axis: "y" }} class="flex flex-col gap-2">
  <h1 class="font-semibold">Paint Type Primary</h1>
  {#each data as d, i}
    <div
      class="group bg-secondary text-secondary-foreground hover:bg-primary/90 flex h-8 items-center space-x-2 rounded-sm p-5 shadow"
    >
      <Label
        for={d.paint.label}
        class="w-full text-sm font-medium group-hover:text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {d.paint.label}
      </Label>
      <Checkbox id={d.paint.label} bind:checked={d.value} onCheckedChange={() => checkedChange(i)} />
    </div>
  {/each}
</div>
