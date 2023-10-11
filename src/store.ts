import { writable } from "svelte/store";

const store = writable({
  activeSection: "Dashboard",
});

export default store;
