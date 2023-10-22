

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.15bc3999.js","_app/immutable/chunks/scheduler.f6a6b711.js","_app/immutable/chunks/index.eee7ceb8.js","_app/immutable/chunks/button.82dfc6a7.js","_app/immutable/chunks/stores.13fa7a7d.js","_app/immutable/chunks/singletons.8b4b0b72.js","_app/immutable/chunks/index.11dec236.js"];
export const stylesheets = ["_app/immutable/assets/0.d986ab4f.css"];
export const fonts = [];
