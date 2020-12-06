import * as Discord from "discord.js"
import * as Configflie from "./config/config"

const client: Discord.Client = new Discord.Client();

client.on("ready", () => {
    // the bot is online

    console.log("I am in");
});

client.login(Configflie.config.token);
client.on("message", msg => {
    // ignore message sent by bots
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(Configflie.config.prefix)) {
        return;
    }

    msg.channel.send(`${msg.author.username} joined the yeslife army`);
});