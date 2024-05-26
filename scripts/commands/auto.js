module.exports = {
  config: {
    name: "auto",
    version: "0.0.2",
    permission: 0,
    prefix: true,
    credits: "Nayan",
    description: "auto video download",
    category: "user",
    usages: "",
    cooldowns: 5,
  },
  start: async function({ nayan, events, args }) {},
  handleEvent: async function ({ api, event, args }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const { alldown } = require("nayan-media-downloader");

    const content = event.body ? event.body : '';
    const body = content.toLowerCase();

    if (body.startsWith("https://")) {
      try {
        api.setMessageReaction("🔍", event.messageID, (err) => {
          if (err) console.error("Error setting reaction:", err);
        }, true);

        const data = await alldown(content);
        console.log(data);

        const { low, high, title } = data.data;

        api.setMessageReaction("✔️", event.messageID, (err) => {
          if (err) console.error("Error setting reaction:", err);
        }, true);

        const video = (await axios.get(high, {
          responseType: "arraybuffer",
        })).data;

        const filePath = __dirname + "/cache/auto.mp4";
        fs.writeFileSync(filePath, Buffer.from(video, "utf-8"));

        return api.sendMessage({
          body: `《TITLE》: ${title}`,
          attachment: fs.createReadStream(filePath),
        }, event.threadID, event.messageID);

      } catch (error) {
        console.error("Error during video download:", error);
        api.setMessageReaction("❌", event.messageID, (err) => {
          if (err) console.error("Error setting reaction:", err);
        }, true);

        return api.sendMessage("An error occurred while processing your request.", event.threadID, event.messageID);
      }
    }
  }
};
