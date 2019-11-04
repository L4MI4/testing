const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply(new Date().getMinutes());

       }
    if (message.content === 'test') {

       message.channel.send(new Date().toLocaleTimeString("jp-JP",{timeZone:"Asia/Tokyo"}));

       }
 if (message.content === '!time') {
     setInterval(function(){
     if(new Date().getMinutes() == 43) 
        {message.channel.send(new Date().toLocaleTimeString("jp-JP",{timeZone:"Asia/Tokyo"}));
    }
}, 60000)}
    
 client.on ('message', async message => {
  var prefix = "=",
      command = message.content.slice (prefix.length).split (" ")[0],
      sec = 5;
  switch (command) {
    case "startloop":
      if (message.channel.loop) return message.channel.send ('loop is already started');
      else message.channel.loop = setInterval (() => message.channel.send ('ddd'), sec * 1000);
      break;
    case "stoploop":
      if (!message.channel.loop) return message.channel.send ('no loop to stop lol');
      else {
        clearInterval (message.channel.loop);
        message.channel.loop = false;
      }
      break;
  }
});


});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
