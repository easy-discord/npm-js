const discord = require('discord.js');
// Created by: Seer#6054
const bot = new discord.Client();
var modulename = "ED";
module.exports = {
    get: function(arg) {

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
    send: function(type, activator, content) {
        if(type == ''){
          this.log('Please select a type! (channel/reply)');
        } else if(content == ''){
          this.log(`I cant send an empty message!`);
        } else if(activator == '') {
          this.log('No command defined');
        }else {
          bot.on("message", function(message) {
          if (message.content === activator) {
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
    // Kill
    kill: function(){
      process.exit();
    }
    // Kill //
  };