<script lang="ts">
  import ComponentsColors from "$lib/components/respray/ComponentsColors.svelte";
  import ComponentsPaintSecondary from "$lib/components/respray/ComponentsPaintSecondary.svelte";
  import ComponentsPaintTypePrimary from "$lib/components/respray/ComponentsPaintTypePrimary.svelte";
  import ComponentsPaintTypeSecondary from "$lib/components/respray/ComponentsPaintTypeSecondary.svelte";
  import ComponentsPaintPrimary from "$lib/components/respray/ComponentsPaintPrimary.svelte";
  import DebugOverlay from "$lib/components/debug/DebugOverlay.svelte";
  import VisibilityProvider from "$lib/providers/VisibilityProvider.svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { activeRoute, sideMenu } from "$lib/store/sidemenu";
  import { get } from "svelte/store";
  import { dataVisual } from "$lib/store/data";
  import ComponentsBodyParts from "$lib/components/body_part/ComponentsBodyParts.svelte";
  import ComponentsBodyPartsSpoiler from "$lib/components/body_part/ComponentsBodyPartsSpoiler.svelte";
  import ComponentsBodyPartsFrontBumper from "$lib/components/body_part/ComponentsBodyPartsFrontBumper.svelte";
  import ComponentsBodyPartsLeftBumper from "$lib/components/body_part/ComponentsBodyPartsLeftBumper.svelte";
  import ComponentsBodyPartsRearBumper from "$lib/components/body_part/ComponentsBodyPartsRearBumper.svelte";
  import ComponentsBodyPartsSideSkirts from "$lib/components/body_part/ComponentsBodyPartsSideSkirts.svelte";
  import ComponentsBodyPartsHood from "$lib/components/body_part/ComponentsBodyPartsHood.svelte";
  function goto(name: string) {
    activeRoute.set(name);
  }
</script>

<DebugOverlay></DebugOverlay>
<VisibilityProvider>
  <div class="right-0 absolute m-5 w-5/12">
    <Card.Root>
      <Card.Header>
        <Card.Title>Bennys</Card.Title>
      </Card.Header>
      <Card.Content>
        <div class="bg-accent divide-1 flex flex-row divide-x divide-slate-100 rounded">
          <div class="w-40">
            {#each dataVisual as menu}
              <Button
                on:click={() => goto(menu.label)}
                class="flex flex-row gap-2 first:rounded-tl last:rounded-bl rounded-none first:hover:rounded-tl last:hover:rounded-br-none"
                size="full"
                variant="icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                  />
                </svg>
                {menu.label}
              </Button>
            {/each}
          </div>
          <div class="bl-white-1 w-full p-2">
            {#if $activeRoute == "Body Parts"}
              <ComponentsBodyParts></ComponentsBodyParts>
            {:else if $activeRoute == "Spoiler"}
              <ComponentsBodyPartsSpoiler></ComponentsBodyPartsSpoiler>
            {:else if $activeRoute == "Front bumper"}
              <ComponentsBodyPartsFrontBumper></ComponentsBodyPartsFrontBumper>
            {:else if $activeRoute == "Left bumper"}
              <ComponentsBodyPartsLeftBumper></ComponentsBodyPartsLeftBumper>
            {:else if $activeRoute == "Rear Bumper"}
              <ComponentsBodyPartsRearBumper></ComponentsBodyPartsRearBumper>
            {:else if $activeRoute == "Side Skirts"}
              <ComponentsBodyPartsSideSkirts></ComponentsBodyPartsSideSkirts>
            {:else if $activeRoute == "Hood"}
              <ComponentsBodyPartsHood></ComponentsBodyPartsHood>
            {:else if $activeRoute == "Painting"}
              <ComponentsColors></ComponentsColors>
            {:else if $activeRoute == "colors-paint-primary"}
              <ComponentsPaintPrimary></ComponentsPaintPrimary>
            {:else if $activeRoute == "colors-paint-secondary"}
              <ComponentsPaintSecondary></ComponentsPaintSecondary>
            {:else if $activeRoute == "colors-paint-type-primary"}
              <ComponentsPaintTypePrimary></ComponentsPaintTypePrimary>
            {:else if $activeRoute == "colors-paint-type-secondary"}
              <ComponentsPaintTypeSecondary></ComponentsPaintTypeSecondary>
            {/if}
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  </div>
</VisibilityProvider>
