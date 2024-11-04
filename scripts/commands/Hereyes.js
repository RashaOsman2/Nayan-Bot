 const fs = require("fs");
module.exports.config = {
    name: "HerEyes",
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
	if (event.body.indexOf("What About Her Eyes?")==0 || event.body.indexOf("What about her eyes?")==0 || event.body.indexOf("what about her eyes?")==0 || event.body.indexOf("What about her eyes")==0) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/Nayan/VID_190500826_205140_684.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
