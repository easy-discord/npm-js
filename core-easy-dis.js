const discord = require('discord.js');
// Created by: Seer#6054
// Seer's favorite color: #22e238
const bot = new discord.Client();
const ED_pack = require('@dxy_seer/easydiscord/package.json');
var modulename = "ED";
var color_green = "#22e238";
const YouTubeNotifier = require('youtube-notification');
var ed_dblSiteLink = "https://dbl-v1.glitch.me/";

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
    log: function(Content) {
        console.log(`${modulename} -> ` + Content);
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
    api: {
      ed_dbl: function(command, botId) {
        if(command == ''){
          console.log(modulename + ` -> Please specify a command`)
        }else if(botId == ''){
          console.log(modulename + ` -> Please specify a botId`)
        }else{
          bot.on("message", function(message) {
            if (message.content === command) {
              message.channel.send(ed_dblSiteLink + 'api/embed/' + botId);
           }
          });
        }
      }
    },
    ban: function(Command, SuccessMsg){
    bot.on("message", function(message) {
    if (message.content === Command) {
      if(message.member.hasPermission(`BAN_MEMBERS`)){
          message.members.mentions.first().ban();
            if(SuccessMsg == ''){
              message.reply('Member was successfully banned!');
            } else {
              message.reply(SuccessMsg);
            }
      } else {
        message.reply('Error, You don\'t have the following permissions: `BAN_MEMBERS`.');
      }
    }
    });
    },
    // Kill
    kill: function(Command, OwnerId){
      bot.on("message", function(message) {
        if (message.content === Command) {
          if(OwnerId == ``){
            this.log(`I could not perform the following command: kill`);
            this.log(`This is becuase you did not specify the bot owner...`);
          } else if(OwnerId == message.author.id){
            message.reply(`**Bot shutting down!**`);
            setTimeout(ExecuteKill, 3000);
            function ExecuteKill(){
              process.exit();
            }  
            
          }
        }
      });
    },
    // Kill //
    // Version
    version: function() {
      return ED_pack.version + ` - [EasyDiscord NPM](https://easydiscord.glitch.me/npm)`; // Version + Site link
    },
    event: {
      channelCreate: function(logMessage) {
        bot.on("channelCreate", function(channel){
            if(logMessage == ''){
                console.log(`${modulename} -> Channel Deleted: ${channel}`);
              }else{
                console.log(`${modulename} -> ${logMessage} ${channel}`);
              }
        });
      },
      channelDelete: function(logMessage){
        bot.on("channelDelete", function(channel){
          if(logMessage == ''){
            console.log(`${modulename} -> Channel Deleted: ${channel}`)
          }else{
            console.log(`${modulename} -> ${logMessage} ${channel}`);
          }
        });
      }
    }
    // Version //
  };