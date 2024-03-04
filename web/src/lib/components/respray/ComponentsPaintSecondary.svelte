<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { hexToRgb } from "$lib/utils/utils";
  import { quadIn, quadOut } from "svelte/easing";
  import { fade, slide } from "svelte/transition";
  let color = "#fffff";
  let rgb = { r: 255, g: 255, b: 255 };
  $: () => {
    rgb = hexToRgb(color);
  };
  function onChangesColor() {
    rgb = hexToRgb(color);
  }
</script>

<div in:slide={{ duration: 250, axis: "y" }} class="flex flex-col gap-2 h-full">
  <h1 class="font-semibold">Paint Secondary</h1>
  <Input bind:value={color} type="color" on:change={onChangesColor} class="p-0 rounded-lg"></Input>
  <Input class="disabled:opacity-75" disabled value="rgb({rgb.r}, {rgb.g}, {rgb.r})" type="text"></Input>
  <div class="grow"></div>
  <Button size="default" variant="default">SAVE</Button>
</div>
