

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/todos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.510d5afb.js","_app/immutable/chunks/scheduler.f6a6b711.js","_app/immutable/chunks/index.eee7ceb8.js","_app/immutable/chunks/button.82dfc6a7.js","_app/immutable/chunks/store.eca81e80.js","_app/immutable/chunks/index.11dec236.js"];
export const stylesheets = [];
export const fonts = [];
