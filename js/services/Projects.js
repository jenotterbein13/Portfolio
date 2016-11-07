app.factory('projects', [function($http){
	var projects = {
		websites: [
			{
				link: "http://www.farmersmarketcolumbus.com/",
				img: "Images/market.png",
				title: "Hope Thru Housing", 
				subtitle: "Farm Market"
			}
		],
		games: [
			{
				img: "../Images/wot.png",
				title: "Wargaming.net - World of Tanks",
				subtitle: "UI Software Engineer",
				resps: [
					"- Worked in a collaborative team with Artists, Engineers, and Designers to re-vamp a rough game design and make the game World of Tanks on Xbox 360, Xbox One, and Playstation 4 a better player experience",
					"- Maintained an existing code base while finding ways to improve and optimize UI code"
				],
				features: "Crews, Customization, Tank Sorting"
			},
			{
				img: "../Images/sims.png",
				title: "EA Maxis - The Sims 4",
				subtitle: "UI Software Engineer",
				resps: [
					"- Worked in collaboration with Engineers, Designers, and Artists to execute a streamlined and easy to use interface",
					"- Contributed to bug fixing of UI across all features as well as assisted in managing UI stability"
				],
				features: "Main Menu Flow, Build Mode UI"
			},
			{
				img: "../Images/ncaa14.png",
				title: "EA Sports - NCAA \'14",
				subtitle: "Software Engineer I",
				resps: [
					"- Helped develop and adapt a data driven audio system that enabled audio artists to have complete control of audio design ",
					"- Trained and supported a new audio engineer to further support content creators"
					], 
				features: "Crowd Audio, Audio System"
			},
			{
				img: "../Images/madden.png",
				title: "EA Sports - Madden 25",
				subtitle: "Software Engineer I",
				resps: [
					"- Helped develop and adapt a data driven audio system that enabled audio artists to have complete control of audio design",
					"- Trained and supported a new audio engineer to further support content creators"
				],
				features: "Crowd Audio, Audio System"
			},
			{
				img: "../Images/ncaa13.png",
				title: "EA Sports - NCAA \'13",
				subtitle: "Software Engineer I",
				resps: [
					"- Worked in a small engineering and design team to implement a major feature that provided a more real-life football experience",
					"- Provided real time database driven data and statistics to the user"
				],
				features: "Mid-game Presentations and Statistics"
			}
		]
	};
	return projects;
}])