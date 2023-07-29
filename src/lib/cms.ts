import { authentication, createDirectus, rest } from "@directus/sdk";
import type { Database } from "./database";

export const directus = createDirectus<Database>("http://192.168.0.62:8055")
    .with(rest())
    .with(authentication());
directus.setToken("0_M7pJ2Gv23z0HTODw-LRzC9M3hynC-K");

export function forceObj<T, IDT extends string | number>(
    obj: T | IDT
): Exclude<T, IDT> {
    return obj as Exclude<T, IDT>;
}
