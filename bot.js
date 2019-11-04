const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});


    
 client.on ('message', async message => {
  var prefix = "=",
      command = message.content.slice (prefix.length).split (" ")[0],
      sec = 10;
  switch (command) {
    case "startloop":
      if (message.channel.timeout) return message.channel.send ('loop is already started, informing you in '+ (leftToFiftyFive()/6000)+' minutes');
      else { message.channel.send('Loop started, will inform you every hour now starting in'+ (leftToFiftyFive()/6000)+ ' minutes.Use []stoploop to stop the loop');
            message.channel.timeout=setTimeout(function(){ // in leftToFiftyFive() milliseconds run this:
            message.channel.send(new Date().toLocaleTimeString("jp-JP",{timeZone:"Asia/Tokyo"}));
       message.channel.loop = setInterval (() => message.channel.send (new Date().toLocaleTimeString("jp-JP",{timeZone:"Asia/Tokyo"})), sec * 1000)
    }, leftToFiftyFive())
            
function leftToFiftyFive(){
    var d = new Date();
    var d2= -d + d.setMinutes(55,0,0);
    if(d2 <=0) d2= d2+ d.setMinutes(60,0,0);
    return d2;	
}
           }
      break;
    case "stoploop":
      if (!message.channel.timeout) return message.channel.send ('no loop to stop lol');
      else {
       message.channel.send('Loop stopping..');
        clearInterval (message.channel.loop);
        clearTimeout(message.channel.timeout);
        message.channel.loop = false;
       message.channel.timeout= false;
      }
      break;
  }
});
client.on('message', message => {

    if (message.content === 'ping') {

       message.reply(new Date().getMinutes());

       }
 });
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
