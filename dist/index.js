"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const Configflie = require("./config/config");
const client = new Discord.Client();
client.on("ready", () => {
    console.log("I am in");
});
client.login(Configflie.config.token);
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(Configflie.config.prefix)) {
        return;
    }
    msg.channel.send(`${msg.author.username} joined the yeslife army`);
});
//# sourceMappingURL=index.js.map