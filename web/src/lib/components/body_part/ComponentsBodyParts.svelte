<script lang="ts">
  import { quadIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { Button } from "$lib/components/ui/button";
  import { activeRoute } from "$lib/store/sidemenu";
  import { dataBodyPart } from "$lib/store/data";
  function goto(name: string) {
    activeRoute.set(name);
  }
</script>

<div in:fade={{ easing: quadIn, duration: 250 }} class="flex flex-col">
  {#each dataBodyPart as part}
    <Button
      on:click={() => goto(part.label)}
      class="flex flex-row gap-2 rounded-none border-b border-b-slate-100"
      size="full"
      variant="icon"
    >
      {part.label}
      <div class="grow"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </Button>
  {/each}
</div>
