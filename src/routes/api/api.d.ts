interface Data {
	// General
	name: { en: String; jp: String; abbrevEN: String; abbrevJP: String; code: String };
	gender: String;
	fanName: String;
	birthday: String;
	debutDate: String;
	generation: String;
	height: String;
	oshi: String;
	// Likes & Dislikes
	likes: String[];
	dislikes: String[];
	goals: String[];
	// Misc
	languages: String[];
	// Credits
	_credits: { hololive_fan_wiki: String; virtualyoutuber_fandom: String };
}
