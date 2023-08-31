/// <reference types="astro/client" />

declare module "tsparticles" {
    export function loadFull(engine: unknown) {}
}

interface Window {
    Masonry: class;
    imagesLoaded(grid, func): any;
}
