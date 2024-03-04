<script lang="ts">
  import { fade, fly, slide } from "svelte/transition";
  import { Button } from "$lib/components/ui/button";
  import { activeRoute } from "$lib/store/sidemenu";
  import { quadIn, quadOut } from "svelte/easing";
  import { dataPaintType } from "$lib/store/data";
  function goto(name: string) {
    activeRoute.set(name);
  }
</script>

<div in:fade={{ easing: quadIn, duration: 250 }} class="flex flex-col">
  <Button
    on:click={() => goto("colors-paint-primary")}
    class="flex flex-row gap-2 rounded-none border-b border-b-slate-100"
    size="full"
    variant="icon"
  >
    Paint (Primary)
    <div class="grow"></div>
    <div class="h-6 w-6 bg-red-500"></div>
  </Button>
  <Button
    on:click={() => goto("colors-paint-type-primary")}
    class="flex flex-row gap-2 rounded-none border-b border-b-slate-100"
    size="full"
    variant="icon"
  >
    Paint Type (Primary)
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
  <Button
    on:click={() => goto("colors-paint-secondary")}
    class="flex flex-row gap-2 rounded-none border-b border-b-slate-100"
    size="full"
    variant="icon"
  >
    Paint (Secondary)
    <div class="grow"></div>
    <div class="h-6 w-6 bg-purple-500"></div>
  </Button>
  <Button
    on:click={() => goto("colors-paint-type-secondary")}
    class="flex flex-row gap-2 rounded-none border-b border-b-slate-100"
    size="full"
    variant="icon"
  >
    Paint Type (Secondary)
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
  <Button class="flex flex-row gap-2 rounded-none border-b border-b-slate-100" size="full" variant="icon">
    PearLescent
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
  <Button class="flex flex-row gap-2 rounded-none border-b border-b-slate-100" size="full" variant="icon">
    Wheels
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
  <Button class="flex flex-row gap-2 rounded-none border-b border-b-slate-100" size="full" variant="icon">
    Interior
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
  <Button class="flex flex-row gap-2 rounded-none border-b border-b-slate-100" size="full" variant="icon">
    Dashboard
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
</div>
