import { readItems } from "@directus/sdk";
import { directus, forceObj } from "@lib/cms";
import type { APIRoute } from "astro";
import ical, { ICalEventRepeatingFreq } from "ical-generator";

export const get: APIRoute = async ({}) => {
    const calendar = ical({
        name: "Umamusume Birthdays",
        source: "https://uma.cafe/calendars",
        url: "https://uma.cafe/calendars/birthdays.ics",
    });

    const characters = await directus.request(
        readItems("characters", {
            fields: [
                "slug",
                "name_en",
                "birth_day",
                "birth_month",
                { counterpart: ["birth_year"] },
            ],
            filter: {
                /* @ts-ignore / should be a string, not a string array */
                tags: { _ncontains: "npc" },
                birth_day: { _nnull: true },
                birth_month: { _nnull: true },
            },
            limit: 999,
        })
    );

    for (const character of characters) {
        const date = new Date(
            `2021/${character.birth_month}/${character.birth_day}`
        );
        calendar.createEvent({
            start: date,
            allDay: true,
            timezone: "Asia/Tokyo",
            summary: `${character.name_en}'${
                character.name_en.endsWith("s") ? "" : "s"
            } Birthday`,
            description: character.counterpart
                ? `Born in ${forceObj(character.counterpart).birth_year}`
                : "",
            repeating: { freq: ICalEventRepeatingFreq.YEARLY },
            url: `https://uma.cafe/characters/${character.slug}`,
        });
    }

    return new Response(calendar.toString(), {
        status: 200,
        headers: {
            "content-type": "text/calendar",
        },
    });
};
