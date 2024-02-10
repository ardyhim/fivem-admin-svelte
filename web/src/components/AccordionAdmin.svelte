<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
    import PrimaryColorForm from "./Vehicles/PrimaryColorForm.svelte";
    import SecondaryColorForm from "./Vehicles/SecondaryColorForm.svelte";
    import VehicleLiveryForm from "./Vehicles/VehicleLiveryForm.svelte";
</script>

<Accordion.Root class="">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Primary Color</Accordion.Trigger>
    <Accordion.Content><PrimaryColorForm/></Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Secondary Color</Accordion.Trigger>
    <Accordion.Content>
      <SecondaryColorForm/>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
    <Accordion.Trigger>Livery</Accordion.Trigger>
    <Accordion.Content>
     <VehicleLiveryForm/>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
