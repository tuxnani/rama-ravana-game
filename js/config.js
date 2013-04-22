GAME.Config = {
	input: {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		SHOOT: 90, /* Z */
		PAUSE: 32, /* spacebar */
		START: 13, /* enter */
		CHANGE: 67 /* C */
	},

	active: false,
	level: 0,
	moveInterval: 3,
	bulletSpeed: 4,
	bulletLimit: 5,
	enemyWidth: 12,
	enemyHeight: 5,
	pointsDiff: 100
};

GAME.Lang = [];
GAME.Lang['pl'] = { /* maybe later */ };
GAME.Lang['en'] = {
	pausedTitle: "ఆగి ఉంది",
	pausedText: "<strong>స్పేస్‍బార్</strong> నొక్కి మళ్ళీ ఆటలోకి వెళ్ళు!<br />మొదటి పేజీకి కూడా వెళ్ళొచ్చు <a href=''>మొదటి పేజీ</a>.",
	nextLevelTitle: "తదుపరి ఉన్నతి",
	nextLevelText: "శుభాకాంక్షలు, మీరందరు రావణులనూ చంపారు<br /> ముందుకు సాగేందుకు <strong>స్పేస్‍బార్</strong> నొక్కండి!",
	killedTitle: "రాముడు కోల్పోయాడు",
	killedText: "రాముడిని రావణుడు ఈ ఆటలో ఓడించాడు<br />మళ్ళీ ఆడేందుకు <strong>స్పేస్ బార్</strong>నొక్కండి!",
	unlockedTitle: "రాముడు!",
	unlockedText: "మీరు మరో రాముడిని కనుగొన్నారు<br />ముందుకు సాగేందుకు <strong>స్పేస్‍బార్</strong> నొక్కండి!",
	winTitle: "శుభాకాంక్షలు",
	winText: "శుభాకాంక్షలు, మీరే ఆ శ్రీరాముడు!"
};
