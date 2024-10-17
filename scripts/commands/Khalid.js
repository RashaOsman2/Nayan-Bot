/* const fs = require("fs");
module.exports.config = {
    name: "Khalid",
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
	if (event.body.indexOf("@Khalid Bhuiyan")==0 || event.body.indexOf("@khalid bhuiyan")==0 || event.body.indexOf("@khalid")==0 || event.body.indexOf("@Khalid")==0) {
		var msg = {
				body: "🖕🖕",
				attachment: fs.createReadStream(__dirname + `/Nayan/lv_0_20240425221229.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
