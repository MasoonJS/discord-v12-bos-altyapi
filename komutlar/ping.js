const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  if(message.channel.type === "dm") return;
   let start = Date.now(); 
   let mesaj = await message.reply(`veriler toplanıyor.`)
    let diff = (Date.now() - start); 
    let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
 mesaj.edit(`${message.author} pong! mesaj gecikme süresi; **${diff}ms** , bot gecikme süresi; **${API}ms**`)
       
      
    }, 5000)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingin, Ölçer',
  usage: 'ping'
};