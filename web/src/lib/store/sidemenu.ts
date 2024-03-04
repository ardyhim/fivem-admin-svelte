import { writable } from "svelte/store";

export const activeRoute = writable("Painting");

export const sideMenu = writable([
  {
    link: "colors", name: "Colors", enable: true, subMenu: [
      { link: "paint-primary", name: "Paint Primary", enable: false },
      { link: "paint-secondary", name: "Paint Secondary", enable: false },
      { link: "paint-type-primary", name: "Paint Type Primary", enable: false },
      { link: "paint-type-secondary", name: "Paint Type Secondary", enable: false },
      { link: "paint-pearlescent", name: "Paint Pearlescent", enable: false },
      { link: "paint-wheel", name: "Paint Wheels", enable: false },
      { link: "paint-interior", name: "Paint Interior", enable: false },
      { link: "paint-dashboard", name: "Paint Dashboard", enable: false },
    ]
  },
  { link: "plate", name: "Plate", enable: false },
  { link: "wheels", name: "Wheels", enable: false },
  { link: "top-rack", name: "Top Rack", enable: false },
  { link: "front-bumper", name: "Front Bumper", enable: false },
  { link: "back-bumper", name: "Back Bumper", enable: false },
  { link: "skrit", name: "Skrit", enable: false },
  { link: "exhaust", name: "Exhaust", enable: false },
  { link: "chassis", name: "Chassis", enable: false },
  { link: "liveries", name: "Liveries", enable: false },
])

export const router = writable({ name: "Colors" })