import { authentication, createDirectus, rest } from "@directus/sdk";
import type { Database } from "./database";

export const directus = createDirectus<Database>(
    import.meta.env.DIRECTUS_ENDPOINT
)
    .with(rest())
    .with(authentication());
directus.setToken(import.meta.env.DIRECTUS_TOKEN);

export function forceObj<T, IDT extends string | number>(
    obj: T | IDT
): Exclude<T, IDT> {
    return obj as Exclude<T, IDT>;
}
