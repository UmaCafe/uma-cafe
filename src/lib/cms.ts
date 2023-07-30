import { authentication, createDirectus, rest } from "@directus/sdk";
import type { Database } from "./database";

export const directus = createDirectus<Database>(
    import.meta.env.DIRECTUS_ENDPOINT
)
    .with(rest())
    .with(authentication());
directus.setToken(import.meta.env.DIRECTUS_TOKEN);

export function forceObj<T>(
    obj: T | string | number
): Exclude<T, string | number> {
    return obj as Exclude<T, string | number>;
}

export function forceArr<T>(
    obj: T[] | string[] | number[]
): Exclude<T, string[] | number[]>[] {
    return obj as Exclude<T, string[] | number[]>[]
};