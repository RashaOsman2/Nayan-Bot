 const fs = require("fs");
module.exports.config = {
    name: "everyone",
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
	if (event.body.indexOf("@everyone")==0 || event.body.indexOf("@Everyone")==0 || event.body.indexOf("@everyone")==0 || event.body.indexOf("@EVERYONE")==0) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/Nayan/Screen_Recording_20240425_211914_Messenger.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😠", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
