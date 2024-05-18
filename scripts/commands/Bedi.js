const fs = require("fs");
module.exports.config = {
    name: "women",
    version: "1.0.0",
    permission: 0,
    credits: "Rasha",
    description: "emoji",
    prefix: true,
    category: "Box chat",
    usages: "<link/UID>",
    cooldowns: 5
};

module.exports.handleEvent = function({ api, event }) {
    var { threadID, messageID } = event;
    if (event.body.toLowerCase().indexOf("women") === 0 || event.body.indexOf("☕") === 0 || event.body.indexOf("Bedi") === 0) {
        var msg = {
            body: "English: Women ☕ Filipino: Babae ☕ Bangla: মহিলা ☕ Hindi: महिला ☕ Urdu: خاتون ☕ Arabic: نساء ☕ Chinese: 女性 ☕ Croatian: žena ☕ Japanese: 女性 ☕ Spanish: Mujer ☕ Danish: Kvinde ☕ Italian: Donna ☕ German: Frau ☕ Dutch: Vrouw ☕ Finnish: Nainen ☕ French: Femme ☕ Greek: γυναίκα ☕ Portuguese: Mulher ☕ Belarusian: жанчыны ☕ Korean: 여성 ☕"
        };
        api.sendMessage(msg, threadID, messageID);
        api.setMessageReaction("☕", event.messageID, (err) => {}, true);
    }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
    // No implementation needed for the run function in this case
};
