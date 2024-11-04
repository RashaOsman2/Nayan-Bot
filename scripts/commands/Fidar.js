 const fs = require("fs");
module.exports.config = {
    name: "Fidar Emoji",
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
	if (event.body.indexOf("🍼")==0 || event.body.indexOf("🍼🍼")==0 || event.body.indexOf("ফিডার")==0 || event.body.indexOf("👶")==0) {
		var msg = {
				body: "এই নেও বাবু ফিডার খাও, আমাকে তো আর খাইতে পারবা না🤭🤭",
				attachment: fs.createReadStream(__dirname + `/Nayan/Fidar.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
