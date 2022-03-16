const tmi = require('tmi.js');
const express = require("express");
const app = express();
const product = require("./api/product");
require('dotenv').config()
const client = new tmi.Client({
	options: {
		debug: true
	},
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.BOT_USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [
		process.env.CHANNEL_NAME
	]
});
var block = false;
var timeOut = 15;

var instLink = 'https://www.instagram.com/_maybee.andreeew_/';
var tgLink = 'https://t.me/andrewsav1';
var donateLink = 'https://www.donationalerts.com/r/andrusha29';
var faceitLink = 'https://www.faceit.com/ru/players/Androm29';
var cfgLink = 'https://prosettings.net/counterstrike/s1mple/';


client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if (self) return;
	if (message.toLowerCase() === '!hello') {
		if (!block) {
			client.say(channel, `@${tags.username}, heya!`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.toLowerCase() === '!inst' || message.toLowerCase() === '!instagram' || message.toLowerCase() === '!инст' || message.toLowerCase() === '!инстаграм') {
		if (!block) {
			client.say(channel, `${instLink}`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.toLowerCase() === '!tg' || message.toLowerCase() === '!тг' || message.toLowerCase() === '!telegram' || message.toLowerCase() === '!телеграм') {
		if (!block) {
			client.say(channel, `${tgLink}`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.toLowerCase() === '!donate' || message.toLowerCase() === '!донат') {
		if (!block) {
			client.say(channel, `${donateLink}`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.toLowerCase() === '!faceit' || message.toLowerCase() === '!фейсит') {
		if (!block) {
			client.say(channel, `${faceitLink}`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.toLowerCase() === '!cfg' || message.toLowerCase() === '!config' || message.toLowerCase() === '!кфг' || message.toLowerCase() === '!конфиг') {
		if (!block) {
			client.say(channel, `You can download my config here - ${cfgLink}`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('LUL')) {
		if (!block) {
			client.say(channel, `LUL LUL`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('BloodTrail')) {
		if (!block) {
			client.say(channel, `BloodTrail BloodTrail BloodTrail`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('mcaT')) {
		if (!block) {
			client.say(channel, `mcaT mcaT mcaT`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('EZ') || message.includes('ez') || message.includes('Ez')) {
		if (!block) {
			client.say(channel, `EZ EZ EZ`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('KEKW') || message.includes('Kekw') || message.includes('kekw')) {
		if (!block) {
			client.say(channel, `KEKW KEKW`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('Kappa')) {
		if (!block) {
			client.say(channel, `Kappa`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('PogChamp')) {
		if (!block) {
			client.say(channel, `PogChamp`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('WutFace')) {
		if (!block) {
			client.say(channel, `WutFace WutFace WutFace`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('NotLikeThis')) {
		if (!block) {
			client.say(channel, `NotLikeThis NotLikeThis`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}

	if (message.includes('BibleThump')) {
		if (!block) {
			client.say(channel, `BibleThump`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}
	if (message.includes('Clap') || message.includes('clap') || message.includes('CLAP')) {
		if (!block) {
			client.say(channel, `Clap Clap`);
			block = true;
			setTimeout(() => {
				block = false;
			}, (timeOut * 1000));
		}
	}
});

app.use(express.json({ extended: false }));

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
