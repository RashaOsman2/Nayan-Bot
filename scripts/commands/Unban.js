module.exports.config = {
    name: "unban",
    version: "1.0.0",
    permission: 2,
    credits: "Rasha",
    description: "Unban a user",
    prefix: true,
    category: "user",
    usages: "`unban user\n\nHow to use?\n$ {global.config.PREFIX}unban <UID @tag>\n\nExample:\n${global.config.PREFIX}unban (uid)\n${global.config.PREFIX}unban @name\n",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": "",
        "canvas": "",
        "jimp": "",
        "node-superfetch": ""
    }
};

module.exports.languages = {
    "en": {
        "unbanSuccess": "[ Unban User ] Unbanned user: %1",
        "unbanCommandSuccess": "[ unbanCommand User ] Unbanned command with user: %1",
        "errorReponse": "%1 Can't do what you request",
        "IDNotFound": "%1 ID you import doesn't exist in database",
        "notBanned": "[ Unban User ] User %1 is not banned",
        "returnUnban": "[ Unban User ] You are requesting to unban user:\n- User ID and name who you want to unban: %1\n\n❮ Reaction this message to complete ❯"
    }
};

module.exports.handleReaction = async({ event, api, Users, handleReaction, getText }) => {
    if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
    const { threadID } = event;
    const { messageID, type, targetID, nameTarget } = handleReaction;

    global.client.handleReaction.splice(global.client.handleReaction.findIndex(item => item.messageID == messageID), 1);

    switch (type) {
        case "unban":
            {
                try {
                    let data = (await Users.getData(targetID)).data || {};
                    data.banned = false;
                    delete data.reason;
                    delete data.dateAdded;
                    await Users.setData(targetID, { data });
                    global.data.userBanned.delete(targetID);
                    return api.sendMessage(getText("unbanSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
                        return api.unsendMessage(messageID);
                    });
                } catch { return api.sendMessage(getText("errorReponse", "[ Unban User ]"), threadID) };
            }
    }
}

module.exports.run = async({ event, api, args, Users, getText }) => {
    const { threadID, messageID } = event;
    var targetID = String(args[0]);

    if (isNaN(targetID)) {
        const mention = Object.keys(event.mentions);
        targetID = String(mention[0]);
    }

    if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Unban User ]"), threadID, messageID);
    if (!global.data.userBanned.has(targetID)) return api.sendMessage(getText("notBanned", targetID), threadID, messageID);
    const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
    return api.sendMessage(getText("returnUnban", `${targetID} - ${nameTarget}`), threadID, (error, info) => {
        global.client.handleReaction.push({
            type: "unban",
            targetID,
            nameTarget,
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,

        });
    }, messageID);
}
