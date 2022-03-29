import './api.d.ts';

export async function get() {
	const data: Data = {
		// General
		name: {
			en: 'Vestia Zeta',
			jp: 'ベスティア・ゼータ',
			abbrevEN: 'Zeta',
			abbrevJP: 'ゼータ',
			code: 'V.7'
		},
		gender: 'Female',
		fanName: 'Zecretary',
		birthday: 'November 7',
		debutDate: 'March 25, 2022',
		generation: 'hololive-ID Gen 3',
		height: '155cm',
		oshi: '📜',
		// Likes & Dislikes
		likes: [
			'Cats',
			'Learning new Things',
			'Horror & Mystery',
			'Milk',
			'Fashion',
			'Retro stuff',
			'Drawing'
		],
		dislikes: ['Heat', 'Sussy people', 'Vegetables', 'Cliffhangers', 'Forgetting things'],
		goals: [
			'Voice act in a game',
			'Hold a Live concert and dance ("Joget") in 3D',
			'Trend #1 on Twitter',
			'Collab with everyone',
			'Make a lot of people happy',
			'World domination',
			'Reach 500k subs',
			'Apex Masters'
		],
		// Misc
		languages: ['Indonesian', 'English', 'Japanese', 'Korean'],
		// Credits for this data endpoint
		_credits: {
			hololive_fan_wiki: 'https://hololive.wiki/wiki/Vestia_Zeta',
			virtualyoutuber_fandom: 'https://virtualyoutuber.fandom.com/wiki/Vestia_Zeta'
		}
	};
	return {
		status: 200,
		body: {
			data
		}
	};
}
