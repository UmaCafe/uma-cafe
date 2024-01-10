/// <reference types="astro/client" />

declare module "tsparticles" {
    export function loadFull(engine: unknown) {}
}

interface Window {
    Masonry: any;
    imagesLoaded(grid, func): any;
}
