import type { CoreSchema } from "@directus/sdk";

type File = CoreSchema["directus_files"][0];

export interface Page {
    id: string;
    title: string;
    description: string;
    content: string;
}

export interface Character {
    id: string;
    game_id: number;
    name_en: string;
    name_jp: string;
    sort: number;
    tags: string[];
    visible: boolean;
    main_color: string;
    secondary_color: string;
    translations: number[] | CharacterTranslation[];
    // bio
    birth_month: number;
    birth_day: number;
    height: number;
    bust: number;
    waist: number;
    hips: number;
    shoe_left: number;
    shoe_right: number;
    dorm: string;
    roommate: string | Character;
    class: string;
    prefers: string[];
    //
    trivia: { trivia: string }[];
    seiyuu: string | Seiyuu;
    counterpart: string | Horse;
    // official_assets
    icon: string | File;
    thumb_jp: string | File;
    seifuku: string | File;
    shoubufuku: string | File;
    proto: string | File;
    stage: string | File;
    header: string | File;
    voice: string | File;
}

export interface CharacterTranslation {
    id: number;
    characters_id: Character;
    languages_id: Language;
    // bio
    epithet: string;
    introduction: string;
    about: string;
    tagline: string;
    refers_self: string;
    refers_trainer: string;
    nicknames: string;
    secrets: { secret: string }[];
    // trainer_notes
    weight: string;
    strengths: string;
    weaknesses: string;
    comment_ears: string;
    comment_tail: string;
    comment_family: string;
    my_rule: string;
    phone_background: string;
    before_a_race: string;
    good_subject: string;
    secret_pride: string;
    frequent_purchase: string;
}

export interface Seiyuu {
    id: string;
    name_jp: string;
    use_full_name: boolean;
    given_name: string;
    family_name: string;
    full_name: string;
    pic: string | File;
    // links
    mal: string;
    anilist: string;
    wikipedia_en: string;
    wikipedia_jp: string;
    socials: { name: string; link: string }[];
    //
    notable_roles: { character: string; media: string }[];
}

export interface Horse {
    id: string;
    character: string | Character;
    // basic_info
    name_jp: string;
    name_en: string;
    sex: string;
    birth_year: number;
    // race_record
    num_races: number;
    num_wins: number;
    num_g1: number;
    notable_results: { race_name: string; race_year: number; placed: number }[];
    //
    trivia: { trivia: string }[];
    // links
    wikipedia_jp: string;
    wikipedia_en: string;
    netkeiba: string;
    //
    pic: string | File;
}

export interface Album {
    id: string;
    visible: boolean;
    name_jp: string;
    name_en: string;
    songs: number[] | AlbumSong[];
    album_cover: string | File;
    release_date: string;
}

export interface Song {
    id: string;
    name_jp: string;
    name_en: string;
}

export interface AlbumSong {
    id: number;
    albums_id: string | Album;
    songs_id: string | Song;
    track_num: number;
    singers: number[] | AlbumSongCharacter[];
}

export interface AlbumSongCharacter {
    id: number;
    albums_songs_id: number | AlbumSong;
    characters_id: string | Character;
}

export interface Language {
    code: string;
    name: string;
    direction: string;
}

export interface Database extends CoreSchema {
    pages: Page[];
    characters: Character[];
    characters_translations: CharacterTranslation[];
    seiyuu: Seiyuu[];
    horses: Horse[];
    albums: Album[];
    albums_songs: AlbumSong[];
    albums_songs_characters: AlbumSongCharacter[];
    songs: Song[];
    languages: Language[];
}
