 const fs = require("fs");
module.exports.config = {
    name: "হুঁম, আমিও তোমাকে..",
    version: "1.0.0",
    permssion: 0,
    credits: "Rasha",
    description: "emoji",
  prefix: true,
    category: "Box chat",
    usages: "< link/UID >",
    cooldowns: 5
};

module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😌")==0 || event.body.indexOf("❤️")==0 || event.body.indexOf("🥰")==0 || event.body.indexOf("🙊")==0) {
		var msg = {
				body: "হুঁম, আমিও তোমাকে অনেক ভালোবাসি কিন্তূ লজ্জায় কখনো বলতে পারিনি🙈",
				attachment: fs.createReadStream(__dirname + `/Nayan/Screen_Recording_20231222_132432_Messenger.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
