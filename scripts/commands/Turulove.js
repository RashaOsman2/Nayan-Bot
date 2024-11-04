 const fs = require("fs");
module.exports.config = {
    name: "TuruLove",
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
	if (event.body.indexOf("turu love")==0 || event.body.indexOf("Turu love")==0 || event.body.indexOf("real love")==0 || event.body.indexOf("Love")==0) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/Nayan/VID_190920414_080630_912.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
