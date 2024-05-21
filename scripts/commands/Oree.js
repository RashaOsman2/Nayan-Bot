/* const fs = require("fs");
module.exports.config = {
    name: "oree",
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
	if (event.body.indexOf("Ore")==0 || event.body.indexOf("Oreh")==0 || event.body.indexOf("Osthir")==0 || event.body.indexOf("osthir")==0) {
		var msg = {
				body: "Orehhh Osthirrr",
				attachment: fs.createReadStream(__dirname + `/Nayan/b217-156f-48aa-a521-5a790a24294b.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
