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
        console.log("Processing URL:", content);

        api.setMessageReaction("🔍", event.messageID, (err) => {
          if (err) console.error("Error setting search reaction:", err);
        }, true);

        const data = await alldown(content);
        console.log("Downloader data:", data);

        if (!data || !data.data) {
          throw new Error("Invalid data received from downloader");
        }

        const { low, high, title } = data.data;
        if (!high) {
          throw new Error("High-quality video URL not found");
        }

        api.setMessageReaction("✔️", event.messageID, (err) => {
          if (err) console.error("Error setting success reaction:", err);
        }, true);

        const video = (await axios.get(high, { responseType: "arraybuffer" })).data;
        const filePath = __dirname + "/cache/auto.mp4";
        fs.writeFileSync(filePath, Buffer.from(video, "utf-8"));

        return api.sendMessage({
          body: `《TITLE》: ${title}`,
          attachment: fs.createReadStream(filePath),
        }, event.threadID, event.messageID);

      } catch (error) {
        console.error("Error during video download process:", error);

        api.setMessageReaction("❌", event.messageID, (err) => {
          if (err) console.error("Error setting error reaction:", err);
        }, true);

        return api.sendMessage("An error occurred while processing your request.", event.threadID, event.messageID);
      }
    }
  }
};
