import { readFile } from "@directus/sdk";
import { directus } from "./cms";

export const CDN_URL = `https://static.uma.cafe`;

export function link(filename: string | null | undefined): string {
    return filename ? CDN_URL + "/" + filename : "unknown";
}

export async function asset(assetId: string | undefined): Promise<string> {
    if (assetId) {
        const fileInfo = await directus.request(readFile(assetId));
        return link(fileInfo.filename_disk);
    }
    return link(null);
}

interface BaseFile {
    filename_disk: string | null;
}
export function file(fileObj: BaseFile | string | undefined | null): string {
    return typeof fileObj == "string"
        ? link(null)
        : link(fileObj?.filename_disk);
}
