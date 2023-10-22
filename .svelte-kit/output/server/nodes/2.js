

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8f0eac21.js","_app/immutable/chunks/scheduler.f6a6b711.js","_app/immutable/chunks/index.eee7ceb8.js"];
export const stylesheets = [];
export const fonts = [];
