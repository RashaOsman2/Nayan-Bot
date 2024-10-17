module.exports.config = {
	name: "gcnickname",
  version: "1.0.0",
  permission: 0,
  credits: "Rasha",
  description: " ",
  prefix: true, 
  category: "user", 
  usages: "/gcnickname [Mention] Nickname",
  cooldowns: 5,
  dependencies: {
	  "fs-extra": "",
	  "axios": "",
	  "canvas" :"",
	  "jimp": "",
	  "node-superfetch": ""
  }
};

module.exports.run = async function({ api, event, args }) {
	const name = args.join(" ")
	const mention = Object.keys(event.mentions)[0];
	if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
	if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
}
