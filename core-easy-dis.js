const discord = require('discord.js');
// Created by: Seer#6054
// Seer's favorite color: #22e238
const bot = new discord.Client();
var modulename = "ED";
module.exports = {
    inviteURL: function(BotID, Permissions) {
      	if(BotID == ''){
          this.log('Error, no BotID was provided...');
        } else {
          if(Permissions == ''){
            return `https://discord.com/oauth2/authorize?client_id=${BotID}&scope=bot&permissions=8`;
          } else {
            return `https://discord.com/oauth2/authorize?client_id=${BotID}&scope=bot&permissions=${Permissions}`;
          }
        }
      },
      // log 
    log: function(arg) {
        console.log(`${modulename} -> ` + arg);
    },
    // log //
    // login
    login: function(token){
      if(token == ''){
        this.log(`Invalid token...`);
      } else {
        bot.login(token);
        this.log(`Bot online!`);
      } 
    },
    // login //
    // message 
    send: function(type, Command, content) {
        if(type == ''){
          this.log('Please select a type! (channel/reply)');
        } else if(content == ''){
          this.log(`I cant send an empty message!`);
        } else if(Command == '') {
          this.log('No command defined');
        }else {
          bot.on("message", function(message) {
          if (message.content === Command) {
            if(type == 'reply'){
              message.reply(content);
            } 
            if(type == 'channel'){
              message.channel.send(content);
            }
          }
          });
        }
    },
    // message //
    // Status
    status: function(StatusType, Content) {
      if(Content == '') {
        this.log(`We can't send a empty status...`)
      } else {
        bot.on('ready', () => {
          var status = Content;
          if(StatusType == 'WATCHING'){
            var STATE = 'WATCHING'
          } else if(StatusType == 'PLAYING'){
            var STATE = 'PLAYING'
          }else if(StatusType == 'LISTENING'){
            var STATE = 'LISTENING'
          }
          bot.user.setActivity(status, 
            { 
              type: STATE
            }
            );
      });
      }
    },
    // Status //
    embed: function(Color, Command, Title, Content) {
      if(Title == ''){
        this.log('An invalid title was provided.');
      }else if(Content == ''){
        this.log(`We can't send a empty embed...`)
      }else{
        bot.on("message", function(message) {
          if (message.content === Command) {
            const EDembed = new discord.MessageEmbed();
            EDembed.addField(`${Title}`, `${Content}`);
          if(Color == ''){
            EDembed.setColor('');
          }else{
            EDembed.setColor(`${Color}`);
          }
          message.channel.send(EDembed);
         }
        });
      }
    },
    // Kill
    kill: function(){
      this.log('The project was killed.')
      process.exit();
    }
    // Kill //
  };