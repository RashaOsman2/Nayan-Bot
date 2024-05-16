module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100008261923491","100012351814671") {
    var aid = ["100008261923491","100012351814671"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mention_দিস না _Rasha বস এর মন মন ভালো নেই আজকে-!💔🥀","রাশহা বস এখন  বিজি যা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মেনশন নাহ দিয়া সিংগেল রাশহা রে একটা গফ দে 😒 😏","Mention_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
