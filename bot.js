const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply("pong");

       }
    if (message.content === 'test') {

       message.channel.send(new Date().toLocaleTimeString("jp-JP",{timeZone:"Asia/Tokyo"}));

       }
    

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
