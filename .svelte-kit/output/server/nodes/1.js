

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.23f91529.js","_app/immutable/chunks/scheduler.f6a6b711.js","_app/immutable/chunks/index.eee7ceb8.js","_app/immutable/chunks/stores.13fa7a7d.js","_app/immutable/chunks/singletons.8b4b0b72.js","_app/immutable/chunks/index.11dec236.js"];
export const stylesheets = [];
export const fonts = [];
