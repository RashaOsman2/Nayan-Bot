module.exports = {
  config: {
    name: "fbvideo",
    version: "0.0.2",
    permission: 0,
    prefix: false,  // Set to false since we don't want to use a prefix command
    credits: "Nayan",
    description: "fb video",
    category: "user",
    usages: "",
    cooldowns: 5,
  },

  languages: {
    "vi": {},
    "en": {
      "missing": '[ ! ] Input link.',
      "wait": '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 𝐅𝐎𝐑 𝐘𝐎𝐔\n\n𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓...',
      "down": '✅ Downloaded Successfully',
      "error": '❌ Error'
    }
  },

  start: async function({ nayan, events, args, lang }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const { ndown } = require("nayan-media-downloader");
    const { messageID, threadID, body } = events;

    // Check if the message contains a Facebook video link
    const fbVideoRegex = /(https?:\/\/(?:www\.)?facebook\.com\/.*\/videos\/\d+)/;
    const fbVideoLink = body.match(fbVideoRegex);

    if (!fbVideoLink) return;

    const videoLink = fbVideoLink[0];
    nayan.reply(lang("wait"), threadID, (err, info) => {
      setTimeout(() => {
        nayan.unsendMessage(info.messageID);
      }, 20000);
    });

    try {
      const res = await ndown(`${videoLink}`);
      console.log(res);

      let videoUrl = `${res.data[0].url}`;
      let videoData = (await axios.get(`${videoUrl}`, {
        responseType: 'arraybuffer'
      })).data;
      fs.writeFileSync(__dirname + "/cache/fbvideo.mp4", Buffer.from(videoData, "utf-8"));

      let videoStream = fs.createReadStream(__dirname + "/cache/fbvideo.mp4");

      nayan.reply({
        body: lang("down"),
        attachment: videoStream
      }, threadID, messageID);
    } catch (err) {
      nayan.reply(lang("error"), threadID, messageID);
    }
  }
};
