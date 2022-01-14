const Discord = require("discord.js");
let room;

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
  if(msg.content === "!!!뭉탱봇 only here"){
    msg.channel.send("ok!");
    room = msg.channel;
  }
  if(msg.channel === room){
    if (msg.content === "무") {
        msg.reply("야호!");
    }
    else if(msg.content !== "무야호!" && msg.content !== "ok!" ){
      msg.channel.send("무야호!");
    }
  }
})

client.login(process.env.TOKEN);