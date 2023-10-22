

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/timetracker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.1780c2e1.js","_app/immutable/chunks/scheduler.f6a6b711.js","_app/immutable/chunks/index.eee7ceb8.js","_app/immutable/chunks/button.82dfc6a7.js","_app/immutable/chunks/store.eca81e80.js","_app/immutable/chunks/index.11dec236.js"];
export const stylesheets = [];
export const fonts = [];
