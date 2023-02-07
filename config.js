module.exports = {
	cmdPerPage: 10,
	adminId: "952119109028565003",
	token: process.env.token || "MTA2ODc4NzgyMzgxMDk3Nzg1Mw.GKVAk2.Yf2qNHXTkhl4FVPOXxspn2L9FcSxozbsLUN8yc",
	clientId: process.env.clientId || "1068787823810977853",
	clientSecret: process.env.clientSecret || "O37hOY1A19MrDmH-9H_i1gNT1ECcj07j",
	port: 4200,
	scopes: ["bot", "guilds", "applications.commands"],
	serverDeafen: true,
	defaultVolume: 100,
	supportServer: "https://discord.gg/k4At4puTCk",
	Issues: "",
	permissions: 277083450689,
	disconnectTime: 30000,
	twentyFourSeven: true,
	autoQueue: true,
	autoPause: true,
	debug: false,
	website: "http://localhost:4200",
	// lavalink info
	nodes: [
		{
			identifier: "Main",
			host: "ssl.freelavalink.ga",
			port: 443,
			password: "www.freelavalink.ga",
			retryAmount: 200,
			retryDelay: 40,
			secure: true,
		},
	],
	embedColor: "#730720",
	presence: {
		status: "idle",
		activities: [
			{
				name: "/help",
				type: "LISTENING",
			},
		],
	},
	iconURL: "https://cdn.discordapp.com/attachments/1068788608175186040/1068816339562668113/888104534302412830.gif",
};
