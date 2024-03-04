<script lang="ts">
  import { quadIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Label } from "$lib/components/ui/label";
  let data = [
    { paint: { label: "Rear Bumper 1" }, value: true },
    { paint: { label: "Rear Bumper 2" }, value: false },
    { paint: { label: "Rear Bumper 3" }, value: false },
    { paint: { label: "Rear Bumper 4" }, value: false },
    { paint: { label: "Rear Bumper 5" }, value: false },
    { paint: { label: "Rear Bumper 6" }, value: false },
    { paint: { label: "Rear Bumper 7" }, value: false },
    { paint: { label: "Rear Bumper 8" }, value: false },
    { paint: { label: "Rear Bumper 9" }, value: false },
  ];

  function checkedChange(i: number) {
    for (let index = 0; index < data.length; index++) {
      if (data[index].value == true) data[index].value = false;
    }
    data[i].value = true;
  }
</script>

<div in:fade={{ easing: quadIn, duration: 250 }} class="flex flex-col">
  <h1 class="font-semibold">Body Parts Rear Bumper</h1>
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
