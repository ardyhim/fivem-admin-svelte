<script lang="ts">
  // import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { FontBold, FontItalic, Underline } from "radix-icons-svelte";
  import * as ToggleGroup from "$lib/components/ui/toggle-group";
  import * as Card from "$lib/components/ui/card";
</script>

<Carousel.Root
orientation="horizontal"
  opts={{
    align: "center",
  }}
  class="w-screen h-auto"
>
  <ToggleGroup.Root type="single" class="w-screen h-full">
    <Carousel.Content class="ml-5 mr-10">
      {#each Array(10) as _, i (i)}
      <Carousel.Item class="md:basis-1/2 lg:basis-1/5 h-full w-screen">
        <ToggleGroup.Item class="h-full w-full border" value={i.toString()} aria-label="Toggle bold">
          <div class="p-1 h-36 text-center items-center justify-center flex">
            <h1 class="text-lg text-center">Primary Color {i}</h1>
          </div>
          
        </ToggleGroup.Item>
      </Carousel.Item>
      {/each}
    </Carousel.Content>
  </ToggleGroup.Root>
  <!-- <Carousel.Previous /> -->
  <!-- <Carousel.Next /> -->
</Carousel.Root>
<!-- <Carousel.Root
  class="w-full"
  orientation="horizontal"
  opts={{
    align: "start",
    loop: true,
  }}
>
  <Carousel.Content class="-ml-1">
    <ToggleGroup.Root type="single">
      {#each Array(5) as _, i (i)}
        <Carousel.Item class="pl-1 md:basis-1/2 lg:basis-1/3 bg-red-500">
          <ToggleGroup.Item
            value={i.toString()}
            aria-label="Bennys Name"
            class="w-48 h-full"
          >
            <div class="h-ful">
              <h1 class="text-lg">Primary Color {i}</h1>
            </div>
          </ToggleGroup.Item>
        </Carousel.Item>
      {/each}
    </ToggleGroup.Root>
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root> -->
