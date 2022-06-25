type Data = {
    // Development progress
    dev: { value: string; maxValue: string };
    // General
    name: { en: string; jp: string; abbrevEN: string; abbrevJP: string; code: string };
    gender: string;
    fanName: string;
    birthday: string;
    debutDate: string;
    generation: string;
    height: string;
    oshi: string;
    // Likes & Dislikes
    likes: string[];
    dislikes: string[];
    goals: string[];
    // Misc
    languages: string[];
    // Credits
    _credits: { hololive_fan_wiki: string; virtualyoutuber_fandom: string };
};
