const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTczMTkwNDc4MDU3NDM5MjQz.XQu4MA.SJjwKJIYENu9ZE2bV55SbhxEZjw);//where BOT_TOKEN is the token of our bot
