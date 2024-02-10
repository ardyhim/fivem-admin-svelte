function SendReactMessage(action, data) {
  let j = {
    action,
    data: data,
  };
  console.log(JSON.stringify(j))
  SendNuiMessage(JSON.stringify(j))
}

function setVisibility(visible) {
  console.log("setVisibility:" + visible)
  SetNuiFocus(visible, visible)
  SendReactMessage("setVisible", visible)
}

RegisterCommand("him-admin", (_, cb) => {
  console.log("react registered command")
  setVisibility(true);
})

RegisterNuiCallback("hideUI", (_, cb) => {
  setVisibility(false);
})


RegisterNuiCallbackType('him-changeColorPrimary') // register the type
// register a magic event name
on('__cfx_nui:changeColor', (data, cb) => {
  console.log(data);
  const playerPed = PlayerPedId();

  // Retrieve the vehicle the player is currently in.
  const vehicle = GetVehiclePedIsIn(playerPed, false);

  // Check if the vehicle exists in the game world.
  if (!DoesEntityExist(vehicle)) {
    // If the vehicle does not exist, end the execution of the code here.
    return;
  }

  // Print the vehicle id
  console.log(`Vehicle ID: ${vehicle}`);
  SetVehicleCustomPrimaryColour(vehicle, data.r, data.g, data.b);
  // cb([{ name: "hello color 1" }, { name: "hello color 2" }]);
  cb(p)
});

RegisterCommand("him-getLivery", (_, cb) => {
  const playerPed = PlayerPedId();

  // Retrieve the vehicle the player is currently in.
  const vehicle = GetVehiclePedIsIn(playerPed, false);

  // Check if the vehicle exists in the game world.
  if (!DoesEntityExist(vehicle)) {
    // If the vehicle does not exist, end the execution of the code here.
    return;
  }

  let liveryCount = GetVehicleLiveryCount(vehicle);
  let livery = GetVehicleLivery(vehicle);
  console.log(livery)
  console.log(liveryCount)
})